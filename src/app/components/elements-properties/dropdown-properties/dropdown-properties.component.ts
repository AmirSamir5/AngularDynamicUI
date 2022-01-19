import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import {
  DropDownConfiguration,
  Validations,
  WidgetConfiguration,
} from 'src/app/models/widget.model';
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

  showInputFields: boolean = false;
  listKeyInput: string = '';
  lookupIdKey: string = '';
  lookupTextKey: string = '';

  lookups = AppConstants.LOOKUP_LISTS;
  lookupsIndex: number = -1;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    if (this.dropdownElementModel!.json.widgetConfiguration === undefined) {
      this.dropdownElementModel!.json.widgetConfiguration =
        new WidgetConfiguration();
      // this.dropdownElementModel!.json.widgetConfiguration.lookupListKey = '';
    } else {
      this.title = this.dropdownElementModel!.json.fieldTitle!;
      this.hint = this.dropdownElementModel!.json.hint!;
      this.isRequired =
        this.dropdownElementModel!.json.validations?.isMandatory === 1;
      // this.lookupListKey =
        // this.dropdownElementModel!.json.widgetConfiguration.lookupListKey!;
    }
  }

  selectChange(event) {
    var val = event.target.value;
    if (val === 'other') {
      this.showInputFields = true;
    } else {
      this.showInputFields = false;
    }
  }

  onSubmit() {
    this.dropdownElementModel!.json.fieldTitle = this.title;
    this.dropdownElementModel!.json.hint = this.hint;
    if (
      this.dropdownElementModel!.json.widgetConfiguration!
        .dropDownConfiguration === undefined
    ) {
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration =
        new DropDownConfiguration();
    }
    if (this.showInputFields) {
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration.lookupListKey =
        this.listKeyInput;
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration.lookupIdKey =
        this.lookupIdKey;
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration.lookupTextKey =
        this.lookupTextKey;
    } else {
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration.lookupListKey =
        this.lookups[this.lookupsIndex].lookupListKey;
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration.lookupIdKey =
        this.lookups[this.lookupsIndex].lookupIdKey;
      this.dropdownElementModel!.json.widgetConfiguration!.dropDownConfiguration.lookupTextKey =
        this.lookups[this.lookupsIndex].lookupTextKey;
    }

    if (this.dropdownElementModel!.json.validations === undefined) {
      this.dropdownElementModel!.json.validations = new Validations();
    }
    this.dropdownElementModel!.json.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.dropdownElementModel!.json.widget_type = AppConstants.WIDGET_DROPDOWN;
    console.log(this.dropdownElementModel);
    this.elementService.onSaveItem(this.dropdownElementModel!, this.index);
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
  }
}
