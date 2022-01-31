import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { Validations, WidgetModel } from 'src/app/models/widget.model';

@Component({
  selector: 'app-checkbox-properties',
  templateUrl: './checkbox-properties.component.html',
  styleUrls: ['./checkbox-properties.component.css'],
})
export class CheckboxPropertiesComponent implements OnInit {
  @Input() checkboxElementModel?: WidgetModel;
  @Input() index: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.checkboxElementModel!.validations === undefined) {
      this.checkboxElementModel!.validations = new Validations();
      this.checkboxElementModel!.validations!.isMandatory = 1;
    }
  }

  onSubmit() {
    if (this.checkboxElementModel!.validations === undefined) {
      this.checkboxElementModel!.validations = new Validations();
      this.checkboxElementModel!.validations!.isMandatory = 1;
    }
    this.checkboxElementModel!.widget_type = AppConstants.WIDGET_CHECKBOX;
  }
}
