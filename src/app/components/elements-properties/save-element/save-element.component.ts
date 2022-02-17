import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { WidgetModel } from 'src/app/models/widget.model';

@Component({
  selector: 'app-save-element',
  templateUrl: './save-element.component.html',
  styleUrls: ['./save-element.component.css'],
})
export class SaveElementComponent implements OnInit {
  @Input() elementModel?: WidgetModel;

  constructor(private _snackBar: MatSnackBar) {}
  
    openSnackBar() {
      let config = new MatSnackBarConfig();
      config.duration = 3000;
      this._snackBar.open('Element Saved Successfully!', 'OK',config);
    }
  ngOnInit(): void {}

  onSubmit() {
    var elements: Array<WidgetModel> = [];

    if (
      localStorage.getItem('elements') !== null ||
      localStorage.getItem('elements') === ''
    ) {
      console.log(
        'save elements local storage',
        localStorage.getItem('elements')
      );
      elements = JSON.parse(localStorage.getItem('elements')!);
    }
    console.log('save elements list', elements);
    console.log('save elements widget model', this.elementModel);
    elements.push(this.elementModel!);
    localStorage.setItem('elements', JSON.stringify(elements, null, 4));
    this.openSnackBar();
  }
}
