import { Component } from '@angular/core';
import { WidgetModel } from './models/widget.model';
import { ElementService } from './services/element.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { JsonResultDialogComponent } from './components/json-result-dialog/json-result-dialog.component';
import { JSONModel, ScreenPages } from './models/json.model';
import { AppConstants } from './constants/constants';
import {
  BoxDecoration,
  EdgeInsetsModel,
  StyleModel,
} from './models/style.model';

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
    var jsonModel: JSONModel;
    var widgetArray: Array<WidgetModel> = [];
    var screens: Array<JSONModel> = [];
    var screenModel: ScreenPages = this.elementService.screenModel;

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
      if (this.elementService.screenName === '') {
        window.alert('Please Enter Appbar Title!');
        return;
      }
      screenModel.fields = widgetArray;

      jsonModel = new JSONModel(this.elementService.screenName, 7, [screenModel]);


      if (
        localStorage.getItem('screens') !== null ||
        localStorage.getItem('screens') === ''
      ) {
        var screenExsits = false;
        screens = JSON.parse(localStorage.getItem('screens')!);
        screens.forEach((element, index) => {
          if (element.screen_name === jsonModel.screen_name) {
            screenExsits = true;
            screens[index] = jsonModel;
          }
        });
        if (!screenExsits) {
          screens.push(jsonModel);
        }
      } else {
        screens.push(jsonModel);
      }

      localStorage.setItem('screens', JSON.stringify(screens, null, 4));
      window.alert('Screen Saved!');
    }
  }

  onGenerateJSON() {
    var valid: Boolean = true;
    var jsonModel: JSONModel;
    var cellsJsonModel: JSONModel;
    var widgetArray: Array<WidgetModel> = [];
    var cells: Array<any> = [];
    var screenModel: ScreenPages = this.elementService.screenModel;

    this.elementService.selectedElements.forEach((element) => {
      console.log(element);
      var tmp = { ...element };
      if (valid) {
        if (tmp.child !== undefined) {
          if (tmp.child!.widget_type === AppConstants.WIDGET_LIST) {
            if (element.child!.cellProtoType === undefined) {
              valid = false;
              window.alert('Please Enter List Cell Prototype!');
              return;
            }
            cells.push({
              cell: element.child!.cell!,
              cellName: element.child!.cellProtoType,
            });
            tmp.child = { ...element.child! };
            tmp.child!.cell = undefined;
          }
          widgetArray.push(tmp);
        } else {
          widgetArray.push(tmp);
        }
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
      if (this.elementService.screenName === '') {
        window.alert('Please Enter Appbar Title!');
        return;
      }
      console.log('cell', cells);

      if (screenModel.widget_type !== undefined) {
        var scrollableWidget: WidgetModel = new WidgetModel({
          widget_type: screenModel.widget_type,
          child: new WidgetModel({
            widget_type: AppConstants.WIDGET_CONTAINER,
            style: new StyleModel({
              margin: new EdgeInsetsModel({
                top: 16,
                bottom: 16,
                left: 16,
                right: 16,
              }),
              decoration: new BoxDecoration({ shape: 'rectangle' }),
            }),
            child: new WidgetModel({
              widget_type: AppConstants.WIDGET_COLUMN,
              children: widgetArray,
              style: new StyleModel({ crossAxisAlignment: 'stretch' }),
            }),
          }),
        });
        screenModel.fields = [scrollableWidget];
      } else {
        screenModel.fields = widgetArray;
      }

      jsonModel = new JSONModel(this.elementService.screenName, 7, [screenModel]);

      var map: Map<string, any> = new Map();

      map[screenModel.page_name] = jsonModel;

      const dialogRef = this.dialog.open(JsonResultDialogComponent, {
        width: '50%',
        data: {
          json: JSON.stringify(
            {
              response: {
                result: map,
              },
            },
            null,
            4
          ),
          cells: cells,
          screenName: screenModel.page_name,
        },
      });
    }
  }
}
