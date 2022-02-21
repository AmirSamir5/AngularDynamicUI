import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AppConstants } from 'src/app/constants/constants';
import { ScreenModel, ScreenPages } from 'src/app/models/screen.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';
import { AddEditActionItemComponent } from '../../dialogs/add-edit-action-item/add-edit-action-item.component';
import { JsonResultDialogComponent } from '../../json-result-dialog/json-result-dialog.component';

@Component({
  selector: 'app-screen-properties',
  templateUrl: './screen-properties.component.html',
  styleUrls: ['./screen-properties.component.css'],
})
export class ScreenPropertiesComponent implements OnInit {
  screenProperty?: ScreenModel;

  constructor(
    private elementService: ElementService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.screenProperty =
      this.elementService.screenModel ?? new ScreenModel({});
    AppEvents.onScreenSelectEvent.subscribe((screen) => {
      this.screenProperty = screen;
    });
  }

  onScrollableChange() {
    this.screenProperty!.screenPages.isScrollable =
      !this.screenProperty!.screenPages.isScrollable;
  }

  onAppbarChange() {
    AppEvents.onScreenSelectEvent.emit(this.screenProperty!);
  }

  onAddActionItem() {
    this.screenProperty?.appBarActions.push({
      name: 'Icon',
      iconName: 'add',
      style: {},
      widgetConfiguration: {
        clickableConfiguration: {
          destination_screen_lookUp: {},
          passedKeys: [],
        },
      },
    });
    const dialogRef = this.dialog.open(AddEditActionItemComponent, {
      width: '30%',
      data: this.screenProperty?.appBarActions[
        this.screenProperty?.appBarActions.length - 1
      ],
    });
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    this._snackBar.open('Screen Saved Successfully!', 'OK', config);
  }

  onSaveScreen() {
    var valid: Boolean = true;
    var widgetArray: Array<WidgetModel> = [];
    var screens: Array<ScreenModel> = [];
    var screenModel = this.elementService.screenModel;

    widgetArray = this.elementService.selectedElements;
    widgetArray.forEach((element) => {
      if (valid) {
        if (element.widget_type === undefined) {
          window.alert('Please Fill Elements Properties!');
          valid = false;
        }
      }
    });
    if (valid) {
      if (this.elementService.selectedElements.length === 0) {
        window.alert('Screen Has No Elements!');
        return;
      }
      if (this.elementService.screenModel?.screen_name === '') {
        window.alert('Please Enter Appbar Title!');
        return;
      }
      screenModel!.screenPages.fields = widgetArray;

      if (
        this.elementService.screenModel!.screen_id === undefined ||
        this.elementService.screenModel!.screen_id === -1
      ) {
        window.alert('Please Enter Screen ID!');
        return;
      }

      if (
        localStorage.getItem('screens') !== null ||
        localStorage.getItem('screens') === ''
      ) {
        var screenExsits = false;
        screens = JSON.parse(localStorage.getItem('screens')!);
        screens.forEach((element, index) => {
          if (
            element.screenPages.page_name === screenModel!.screenPages.page_name
          ) {
            screenExsits = true;
            screens[index] = screenModel!;
          }
        });
        if (!screenExsits) {
          screens.push(screenModel!);
        }
      } else {
        screens.push(screenModel!);
      }

      localStorage.setItem('screens', JSON.stringify(screens, null, 4));
      AppEvents.openNavEvent.emit();
      this.openSnackBar();
    }
  }

  onGenerateJSON() {
    var valid: Boolean = true;
    var cellsJsonModel: ScreenModel;
    var widgetArray: Array<WidgetModel> = [];
    var cells: Array<any> = [];
    var screenModel = this.elementService.screenModel;

    this.elementService.selectedElements.forEach((element) => {
      console.log(element);
      var tmp = { ...element };
      if (valid) {
        if (tmp.widget_type === AppConstants.WIDGET_LIST) {
          if (element.cellProtoType === undefined) {
            valid = false;
            window.alert('Please Enter List Cell Prototype!');
            return;
          }
          cells.push({
            cell: element.cell!,
            cellName: element.cellProtoType,
          });
          tmp = { ...element };
          tmp.cell = undefined;
        }
        widgetArray.push(tmp);
      } else {
        widgetArray.push(tmp);
      }
    });
    widgetArray.forEach((element) => {
      if (valid) {
        if (element.widget_type === undefined) {
          window.alert('Please Fill Elements Properties!');
          valid = false;
        }
      }
    });
    if (valid) {
      if (this.elementService.selectedElements.length === 0) {
        window.alert('Screen Has No Elements!');
        return;
      }
      if (
        this.elementService.screenModel!.screen_name === undefined ||
        this.elementService.screenModel!.screen_name === ''
      ) {
        window.alert('Please Enter Look Screen Name!');
        return;
      }

      if (
        this.elementService.screenModel!.screenPages.page_name === undefined
      ) {
        window.alert('Please Enter Appbar Title!');
        return;
      }

      if (
        this.elementService.screenModel!.screen_id === undefined ||
        this.elementService.screenModel!.screen_id === -1
      ) {
        window.alert('Please Enter Screen ID!');
        return;
      }
      screenModel.screenPages.fields = widgetArray;
      const dialogRef = this.dialog.open(JsonResultDialogComponent, {
        width: '50%',
        data: {
          json: JSON.stringify(screenModel, null, 4),
          cells: cells,
          screenName: screenModel!.screen_name,
        },
      });
    }
  }
}
