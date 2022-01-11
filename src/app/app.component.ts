import { Component } from '@angular/core';
import { JSONModel } from './models/json.model';
import { ElementService } from './services/element.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { JsonResultDialogComponent } from './components/json-result-dialog/json-result-dialog.component';

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
    var jsonArray: Array<JSONModel> = [];
    this.elementService.selectedElements.forEach((element) => {
      jsonArray.push(element.json);
      console.log(element);
    });
    jsonArray.forEach((element) => {
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
      // window.alert(JSON.stringify(jsonArray));
      console.log(JSON.stringify(jsonArray));
      const dialogRef = this.dialog.open(JsonResultDialogComponent, {
        width: '50%',
        data: { json: JSON.stringify(jsonArray) },
      });
    }
  }
}
