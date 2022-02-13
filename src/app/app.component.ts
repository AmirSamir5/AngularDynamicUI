import { Component } from '@angular/core';
import { WidgetModel } from './models/widget.model';
import { ElementService } from './services/element.service';
import { MatDialog } from '@angular/material/dialog';
import { JsonResultDialogComponent } from './components/json-result-dialog/json-result-dialog.component';
import { ScreenModel, ScreenPages } from './models/screen.model';
import { AppConstants } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vericash-angular-tool';

  constructor(
    private elementService: ElementService,
    private dialog: MatDialog
  ) {}

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

      if (this.elementService.screenModel!.screen_id === undefined
        || this.elementService.screenModel!.screen_id === -1) {
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
      window.alert('Screen Saved!');
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
      if (this.elementService.screenModel!.screen_name === undefined || this.elementService.screenModel!.screen_name === '') {
        window.alert('Please Enter Look Screen Name!');
        return;
      }

      if (this.elementService.screenModel!.screenPages.page_name === undefined) {
        window.alert('Please Enter Appbar Title!');
        return;
      }

      if (this.elementService.screenModel!.screen_id === undefined
        || this.elementService.screenModel!.screen_id === -1) {
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
