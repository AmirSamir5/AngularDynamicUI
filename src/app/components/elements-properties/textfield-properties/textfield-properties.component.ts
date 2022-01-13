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
    if (this.inputFieldElementModel!.json.validations === undefined) {
      this.inputFieldElementModel!.json.validations = new Validations();
      this.inputFieldElementModel!.json.validations.isMandatory = 0;
      this.inputFieldElementModel!.json.validations.maxLength = '';
      this.inputFieldElementModel!.json.validations.minLength = '';
      this.inputFieldElementModel!.json.validations.regex = '';
      this.inputFieldElementModel!.json.validations.error_msg = '';
    } else {
      this.minLength = Number.parseInt(
        this.inputFieldElementModel!.json.validations.minLength!
      );
      this.maxLength = Number.parseInt(
        this.inputFieldElementModel?.json.validations.maxLength!
      );
      this.isRequired =
        this.inputFieldElementModel!.json.validations.isMandatory === 1;
      this.regex = this.inputFieldElementModel!.json.validations.regex!;
      this.parameter_name = this.inputFieldElementModel!.json.parameterName!;
      this.parameter_order =
        this.inputFieldElementModel!.json.validations.parameterOrder!;
      this.default_value =
        this.inputFieldElementModel!.json.parameterDefaultValue!;
      this.title = this.inputFieldElementModel!.json.fieldTitle!;
      this.hint = this.inputFieldElementModel!.json.hint!;
    }
  }

  onSubmit() {
    // this.inputFieldElementModel!.json.widget_type =
    //   AppConstants.WIDGET_INPUT_FIELD;
    if (this.inputFieldElementModel!.json.validations === undefined) {
      this.inputFieldElementModel!.json.validations = new Validations();
    }

    this.inputFieldElementModel!.json.validations!.maxLength =
      this.maxLength.toString();
    this.inputFieldElementModel!.json.validations!.minLength =
      this.minLength.toString();
    this.inputFieldElementModel!.json.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.inputFieldElementModel!.json.validations!.regex = this.regex;
    this.inputFieldElementModel!.json.validations!.error_msg = this.error_msg;
    this.inputFieldElementModel!.json.parameterDefaultValue =
      this.default_value;
    this.inputFieldElementModel!.json.parameterName = this.parameter_name;
    this.inputFieldElementModel!.json.validations!.parameterOrder =
      this.parameter_order;
    this.inputFieldElementModel!.json.fieldTitle = this.title;
    this.inputFieldElementModel!.json.hint = this.hint;
    console.log(this.inputFieldElementModel);

    this.elementService.onSaveItem(this.inputFieldElementModel!, this.index);
    // this.inputFieldElementModel = undefined;

    // this.elementPropertyService.inputFieldSaveEvent(
    //   this.inputFieldElementModel!
    // );
  }
}
