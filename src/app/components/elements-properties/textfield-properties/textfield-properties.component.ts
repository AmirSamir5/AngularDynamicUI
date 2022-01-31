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
  @Input() inputFieldElementModel?: WidgetModel;
  @Input() index: number = 0;
  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    if (this.inputFieldElementModel!.validations === undefined) {
      this.inputFieldElementModel!.validations = new Validations();
      this.inputFieldElementModel!.validations.isMandatory = 0;
      this.inputFieldElementModel!.validations.maxLength = '';
      this.inputFieldElementModel!.validations.minLength = '';
      this.inputFieldElementModel!.validations.regex = '';
      this.inputFieldElementModel!.validations.error_msg = '';
    }
  }

  onSubmit() {
    if (this.inputFieldElementModel!.validations === undefined) {
      this.inputFieldElementModel!.validations = new Validations();
    }
    this.elementService.onSaveItem(this.inputFieldElementModel!, this.index);
  }
}
