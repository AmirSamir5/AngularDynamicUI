import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { WidgetModel, Validations } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-textfield-properties',
  templateUrl: './textfield-properties.component.html',
  styleUrls: ['./textfield-properties.component.css'],
})
export class TextfieldPropertiesComponent implements OnInit {
  isRequired: boolean = false;
  maxLength: number = 0;
  minLength: number = 0;
  regex: string = '';
  error_msg: string = '';
  title: string = '';
  hint: string = '';
  parameter_name: string = '';
  parameter_order: number = 0;
  default_value: string = '';
  @Input() inputFieldElementModel?: ElementModel;
  @Input() index: number = 0;
  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.inputFieldElementModel);
    if (this.inputFieldElementModel!.widget.validations === undefined) {
      this.inputFieldElementModel!.widget.validations = new Validations();
      this.inputFieldElementModel!.widget.validations.isMandatory = 0;
      this.inputFieldElementModel!.widget.validations.maxLength = '';
      this.inputFieldElementModel!.widget.validations.minLength = '';
      this.inputFieldElementModel!.widget.validations.regex = '';
      this.inputFieldElementModel!.widget.validations.error_msg = '';
    } else {
      this.minLength = Number.parseInt(
        this.inputFieldElementModel!.widget.validations.minLength!
      );
      this.maxLength = Number.parseInt(
        this.inputFieldElementModel?.widget.validations.maxLength!
      );
      this.isRequired =
        this.inputFieldElementModel!.widget.validations.isMandatory === 1;
      this.regex = this.inputFieldElementModel!.widget.validations.regex!;
      this.parameter_name =
        this.inputFieldElementModel!.widget.validations!.parameterName!;
      this.parameter_order =
        this.inputFieldElementModel!.widget.validations.parameterOrder!;
      this.default_value =
        this.inputFieldElementModel!.widget.validations!.parameterDefaultValue!;
      this.title = this.inputFieldElementModel!.widget.fieldTitle!;
      this.hint = this.inputFieldElementModel!.widget.hint!;
    }
  }

  onSubmit() {
    // this.inputFieldElementModel!.widget.widget_type =
    //   AppConstants.WIDGET_INPUT_FIELD;
    if (this.inputFieldElementModel!.widget.validations === undefined) {
      this.inputFieldElementModel!.widget.validations = new Validations();
    }

    this.inputFieldElementModel!.widget.validations!.maxLength =
      this.maxLength.toString();
    this.inputFieldElementModel!.widget.validations!.minLength =
      this.minLength.toString();
    this.inputFieldElementModel!.widget.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.inputFieldElementModel!.widget.validations!.regex = this.regex;
    this.inputFieldElementModel!.widget.validations!.error_msg = this.error_msg;
    this.inputFieldElementModel!.widget.validations!.parameterDefaultValue =
      this.default_value;
    this.inputFieldElementModel!.widget.validations!.parameterName =
      this.parameter_name;
    this.inputFieldElementModel!.widget.validations!.parameterOrder =
      this.parameter_order;
    this.inputFieldElementModel!.widget.fieldTitle = this.title;
    this.inputFieldElementModel!.widget.hint = this.hint;
    console.log(this.inputFieldElementModel);

    this.elementService.onSaveItem(this.inputFieldElementModel!, this.index);
    // this.inputFieldElementModel = undefined;

    // this.elementPropertyService.inputFieldSaveEvent(
    //   this.inputFieldElementModel!
    // );
  }
}
