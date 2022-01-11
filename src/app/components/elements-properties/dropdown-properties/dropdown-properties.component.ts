import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { Validations, WidgetConfiguration } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.css'],
})
export class DropdownPropertiesComponent implements OnInit {
  @Input() dropdownElementModel?: ElementModel;
  @Input() index: number = 0;

  title: string = '';
  hint: string = '';
  isRequired: boolean = false;
  lookupListKey: string = '';

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    if (this.dropdownElementModel!.json.widgetConfiguration === undefined) {
      this.dropdownElementModel!.json.widgetConfiguration =
        new WidgetConfiguration();
      this.dropdownElementModel!.json.widgetConfiguration.lookupListKey = '';
    } else {
      this.title = this.dropdownElementModel!.json.fieldTitle!;
      this.hint = this.dropdownElementModel!.json.hint!;
      this.isRequired =
        this.dropdownElementModel!.json.validations?.isMandatory === 1;
      this.lookupListKey =
        this.dropdownElementModel!.json.widgetConfiguration.lookupListKey!;
    }
  }

  onSubmit() {
    this.dropdownElementModel!.json.fieldTitle = this.title;
    this.dropdownElementModel!.json.hint = this.hint;
    this.dropdownElementModel!.json.widgetConfiguration!.lookupListKey =
      this.lookupListKey;
    if (this.dropdownElementModel!.json.validations === undefined) {
      this.dropdownElementModel!.json.validations = new Validations();
    }
    this.dropdownElementModel!.json.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.dropdownElementModel!.json.widget_type = AppConstants.WIDGET_DROPDOWN;
    if (
      this.dropdownElementModel?.json.fieldTitle === null ||
      this.dropdownElementModel?.json.widgetConfiguration?.dropDownConfiguration
        ?.lookupListKey === null ||
      this.dropdownElementModel?.json.hint === null ||
      this.dropdownElementModel?.json.widgetConfiguration?.lookupListKey === ''
    ) {
      confirm('Please Fill All Fields');
      return;
    }
    console.log(this.dropdownElementModel);
    this.elementService.onSaveItem(this.dropdownElementModel!, this.index);
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
  }
}
