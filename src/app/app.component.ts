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

  onSaveScreen(){
    var valid: Boolean = true;
    var jsonModel: JSONModel;
    var widgetArray: Array<WidgetModel> = [];
    var screens: Array<JSONModel> = [];

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
      jsonModel = new JSONModel(this.elementService.screenName, 7, [
        new ScreenPages(this.elementService.screenName, widgetArray),
      ]);
      
      if (localStorage.getItem('screens') !== null || localStorage.getItem('screens') === ''){
        var screenExsits = false;
        screens = JSON.parse(localStorage.getItem('screens')!);
        screens.forEach((element,index) => {
          if (element.screen_name === jsonModel.screen_name){
            screenExsits = true;
            screens[index] = jsonModel;
          }
        });
        if(!screenExsits){
          screens.push(jsonModel);
        }
      }else{
        screens.push(jsonModel);
      }
      
      localStorage.setItem("screens", JSON.stringify(screens, null, 4),);
      window.alert('Screen Saved!');
    }
  }

  onGenerateJSON() {
    var valid: Boolean = true;
    var jsonModel: JSONModel;
    var cellsJsonModel: JSONModel;
    var widgetArray: Array<WidgetModel> = [];
    var cells: Array<any> = [];
    this.elementService.selectedElements.forEach((element) => {
      console.log(element);
      var tmp = { ...element };
      if(valid){
        if (tmp.widget_type === AppConstants.WIDGET_LIST) {
          if(element.cellProtoType === undefined){
            valid = false;
            window.alert('Please Enter List Cell Prototype!');
            return;
          }
          cells.push({ cell: element.cell!, cellName: element.cellProtoType });
          tmp.cell = undefined;
        }
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
      if (this.elementService.screenName === '') {
        window.alert('Please Enter Appbar Title!');
        return;
      }
      console.log('cell', cells);
      jsonModel = new JSONModel(this.elementService.screenName, 7, [
        new ScreenPages(this.elementService.screenName, widgetArray),
      ]);
      const dialogRef = this.dialog.open(JsonResultDialogComponent, {
        width: '50%',
        data: {
          json: JSON.stringify(jsonModel, null, 4),
          cells: cells,
          screenName: this.elementService.screenName,
        },
      });
    }
  }
}
