import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { JSONModel, Validations } from 'src/app/models/json.model';
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
      if (this.inputFieldElementModel!.json.validations.isMandatory === 0) {
        this.isRequired = false;
      } else if (
        this.inputFieldElementModel!.json.validations.isMandatory === 1
      ) {
        this.isRequired = true;
      }
    }
  }

  onSubmit() {
    this.inputFieldElementModel!.json.widget_type =
      AppConstants.WIDGET_INPUT_FIELD;
    if (this.isRequired) {
      this.inputFieldElementModel!.json.validations!.isMandatory = 1;
    } else {
      this.inputFieldElementModel!.json.validations!.isMandatory = 0;
    }
    this.inputFieldElementModel!.json.validations!.maxLength =
      this.maxLength.toString();
    this.inputFieldElementModel!.json.validations!.minLength =
      this.minLength.toString();

    console.log(this.inputFieldElementModel);

    this.elementService.onSaveItem(this.inputFieldElementModel!, this.index);
    // this.inputFieldElementModel = undefined;

    // this.elementPropertyService.inputFieldSaveEvent(
    //   this.inputFieldElementModel!
    // );
  }
}
