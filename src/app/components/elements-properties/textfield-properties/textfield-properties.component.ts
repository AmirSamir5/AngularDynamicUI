import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
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
  @Input() inputFieldElementModel?: WidgetModel;
  @Input() index: number = 0;
  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.inputFieldElementModel);
    if (this.inputFieldElementModel!.validations === undefined) {
      this.inputFieldElementModel!.validations = new Validations();
      this.inputFieldElementModel!.validations.isMandatory = 0;
      this.inputFieldElementModel!.validations.maxLength = '';
      this.inputFieldElementModel!.validations.minLength = '';
      this.inputFieldElementModel!.validations.regex = '';
      this.inputFieldElementModel!.validations.error_msg = '';
    } else {
      this.minLength = Number.parseInt(
        this.inputFieldElementModel!.validations.minLength!
      );
      this.maxLength = Number.parseInt(
        this.inputFieldElementModel?.validations.maxLength!
      );
      this.isRequired =
        this.inputFieldElementModel!.validations.isMandatory === 1;
      this.regex = this.inputFieldElementModel!.validations.regex!;
      this.parameter_name =
        this.inputFieldElementModel!.validations!.parameterName!;
      this.parameter_order =
        this.inputFieldElementModel!.validations.parameterOrder!;
      this.default_value =
        this.inputFieldElementModel!.validations!.parameterDefaultValue!;
      this.title = this.inputFieldElementModel!.fieldTitle!;
      this.hint = this.inputFieldElementModel!.hint!;
    }
  }

  onSubmit() {
    // this.inputFieldElementModel!_type =
    //   AppConstants.WIDGET_INPUT_FIELD;
    if (this.inputFieldElementModel!.validations === undefined) {
      this.inputFieldElementModel!.validations = new Validations();
    }

    this.inputFieldElementModel!.validations!.maxLength =
      this.maxLength.toString();
    this.inputFieldElementModel!.validations!.minLength =
      this.minLength.toString();
    this.inputFieldElementModel!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.inputFieldElementModel!.validations!.regex = this.regex;
    this.inputFieldElementModel!.validations!.error_msg = this.error_msg;
    this.inputFieldElementModel!.validations!.parameterDefaultValue =
      this.default_value;
    this.inputFieldElementModel!.validations!.parameterName =
      this.parameter_name;
    this.inputFieldElementModel!.validations!.parameterOrder =
      this.parameter_order;
    this.inputFieldElementModel!.fieldTitle = this.title;
    this.inputFieldElementModel!.hint = this.hint;
    console.log(this.inputFieldElementModel);

    this.elementService.onSaveItem(this.inputFieldElementModel!, this.index);
    // this.inputFieldElementModel = undefined;

    // this.elementPropertyService.inputFieldSaveEvent(
    //   this.inputFieldElementModel!
    // );
  }
}
