import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import {
  DropDownConfiguration,
  Validations,
  WidgetConfiguration,
  WidgetModel,
} from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.css'],
})
export class DropdownPropertiesComponent implements OnInit {
  @Input() dropdownElementModel?: WidgetModel;
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
    if (this.dropdownElementModel!.widgetConfiguration === undefined) {
      this.dropdownElementModel!.widgetConfiguration =
        new WidgetConfiguration();
      // this.dropdownElementModel!.widget.widgetConfiguration.lookupListKey = '';
    } else {
      this.title = this.dropdownElementModel!.fieldTitle!;
      this.hint = this.dropdownElementModel!.hint!;
      this.isRequired =
        this.dropdownElementModel!.validations?.isMandatory === 1;
      // this.lookupListKey =
        // this.dropdownElementModel!.widget.widgetConfiguration.lookupListKey!;
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
    this.dropdownElementModel!.fieldTitle = this.title;
    this.dropdownElementModel!.hint = this.hint;
    if (
      this.dropdownElementModel!.widgetConfiguration!
        .dropDownConfiguration === undefined
    ) {
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration =
        new DropDownConfiguration();
    }
    if (this.showInputFields) {
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration.lookupListKey =
        this.listKeyInput;
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration.lookupIdKey =
        this.lookupIdKey;
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration.lookupTextKey =
        this.lookupTextKey;
    } else {
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration.lookupListKey =
        this.lookups[this.lookupsIndex].lookupListKey;
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration.lookupIdKey =
        this.lookups[this.lookupsIndex].lookupIdKey;
      this.dropdownElementModel!.widgetConfiguration!.dropDownConfiguration.lookupTextKey =
        this.lookups[this.lookupsIndex].lookupTextKey;
    }

    if (this.dropdownElementModel!.validations === undefined) {
      this.dropdownElementModel!.validations = new Validations();
    }
    this.dropdownElementModel!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.dropdownElementModel!.widget_type = AppConstants.WIDGET_DROPDOWN;
    console.log(this.dropdownElementModel);
    this.elementService.onSaveItem(this.dropdownElementModel!, this.index);
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
  }
}
