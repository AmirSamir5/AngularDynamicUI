import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConstants } from 'src/app/constants/constants';
import { WidgetModel } from 'src/app/models/widget.model';

@Component({
  selector: 'app-add-edit-action-item',
  templateUrl: './add-edit-action-item.component.html',
  styleUrls: ['./add-edit-action-item.component.css'],
})
export class AddEditActionItemComponent implements OnInit {
  clickablesArr = AppConstants.CLICKABLE_CONFIGURATION;
  iconArr = AppConstants.LIST_ICONS;

  constructor(@Inject(MAT_DIALOG_DATA) public selectedElement: WidgetModel) {}

  ngOnInit(): void {}

  onPassedKeys(event) {
    console.log(event.target.value);
    this.selectedElement!.widgetConfiguration!.clickableConfiguration!.passedKeys =
      event.target.value.split(' ');
  }

  selectChange(event) {
    var val = event.value;
    this.iconArr.forEach((element) => {
      if (element.iconName === val) {
        this.selectedElement!.fontFamily = element.fontFamily;
        this.selectedElement!.codePoint = element.codePoint;
      }
    });
  }
}
