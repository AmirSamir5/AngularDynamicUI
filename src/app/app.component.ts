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

  onGenerateJSON() {
    var valid: Boolean = true;
    var jsonModel: JSONModel;
    var cellsJsonModel: JSONModel;
    var widgetArray: Array<WidgetModel> = [];
    var cells: Array<any> = [];
    this.elementService.selectedElements.forEach((element) => {
      console.log(element);
      var tmp = { ...element };
      if (tmp.widget_type === AppConstants.WIDGET_LIST) {
        cells.push({ cell: element.cell!, cellName: element.cellProtoType });
        tmp.cell = undefined;
      }
      widgetArray.push(tmp);
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
        },
      });
    }
  }
}
