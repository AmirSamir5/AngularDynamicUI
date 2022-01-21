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
    if (this.dropdownElementModel!.widget.widgetConfiguration === undefined) {
      this.dropdownElementModel!.widget.widgetConfiguration =
        new WidgetConfiguration();
      // this.dropdownElementModel!.widget.widgetConfiguration.lookupListKey = '';
    } else {
      this.title = this.dropdownElementModel!.widget.fieldTitle!;
      this.hint = this.dropdownElementModel!.widget.hint!;
      this.isRequired =
        this.dropdownElementModel!.widget.validations?.isMandatory === 1;
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
    this.dropdownElementModel!.widget.fieldTitle = this.title;
    this.dropdownElementModel!.widget.hint = this.hint;
    if (
      this.dropdownElementModel!.widget.widgetConfiguration!
        .dropDownConfiguration === undefined
    ) {
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration =
        new DropDownConfiguration();
    }
    if (this.showInputFields) {
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration.lookupListKey =
        this.listKeyInput;
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration.lookupIdKey =
        this.lookupIdKey;
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration.lookupTextKey =
        this.lookupTextKey;
    } else {
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration.lookupListKey =
        this.lookups[this.lookupsIndex].lookupListKey;
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration.lookupIdKey =
        this.lookups[this.lookupsIndex].lookupIdKey;
      this.dropdownElementModel!.widget.widgetConfiguration!.dropDownConfiguration.lookupTextKey =
        this.lookups[this.lookupsIndex].lookupTextKey;
    }

    if (this.dropdownElementModel!.widget.validations === undefined) {
      this.dropdownElementModel!.widget.validations = new Validations();
    }
    this.dropdownElementModel!.widget.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.dropdownElementModel!.widget.widget_type = AppConstants.WIDGET_DROPDOWN;
    console.log(this.dropdownElementModel);
    this.elementService.onSaveItem(this.dropdownElementModel!, this.index);
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
  }
}
