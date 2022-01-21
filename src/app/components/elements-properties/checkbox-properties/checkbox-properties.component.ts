import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { Validations } from 'src/app/models/widget.model';

@Component({
  selector: 'app-checkbox-properties',
  templateUrl: './checkbox-properties.component.html',
  styleUrls: ['./checkbox-properties.component.css'],
})
export class CheckboxPropertiesComponent implements OnInit {
  @Input() checkboxElementModel?: ElementModel;
  @Input() index: number = 0;

  title: string = '';
  parameterName: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.checkboxElementModel!.widget.validations === undefined) {
      this.checkboxElementModel!.widget.validations = new Validations();
      this.checkboxElementModel!.widget.validations!.isMandatory = 1;
    } else {
      this.title = this.checkboxElementModel!.widget.fieldTitle!;
      this.parameterName =
        this.checkboxElementModel!.widget.validations!.parameterName!;
    }
  }

  onSubmit() {
    this.checkboxElementModel!.widget.fieldTitle = this.title;
    this.checkboxElementModel!.widget.validations!.parameterName =
      this.parameterName;
    this.checkboxElementModel!.widget.validations!.parameterDefaultValue =
      this.parameterName;
    this.checkboxElementModel!.widget.widget_type = AppConstants.WIDGET_CHECKBOX;
  }
}
