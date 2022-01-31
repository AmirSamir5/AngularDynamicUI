import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import {
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
    console.log(this.dropdownElementModel);
    if (this.dropdownElementModel!.child!.widgetConfiguration === undefined) {
      this.dropdownElementModel!.child!.widgetConfiguration =
        new WidgetConfiguration();
      // this.dropdownElementModel!.widget.widgetConfiguration.lookupListKey = '';
    } else {
      this.title = this.dropdownElementModel!.child!.fieldTitle!;
      this.hint = this.dropdownElementModel!.child!.hint!;
      this.isRequired =
        this.dropdownElementModel!.child!.validations?.isMandatory === 1;
      this.lookupsIndex = this.lookups.findIndex(
        (element) =>
          element.lookupIdKey ===
          this.dropdownElementModel!.child!.widgetConfiguration!.lookupIdKey
      );
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
    this.dropdownElementModel!.child!.fieldTitle = this.title;
    this.dropdownElementModel!.child!.hint = this.hint;

    if (this.showInputFields) {
      this.dropdownElementModel!.child!.widgetConfiguration!.lookupListKey =
        this.listKeyInput;
      this.dropdownElementModel!.child!.widgetConfiguration!.lookupIdKey =
        this.lookupIdKey;
      this.dropdownElementModel!.child!.widgetConfiguration!.lookupTextKey =
        this.lookupTextKey;
    } else {
      this.dropdownElementModel!.child!.widgetConfiguration!.lookupListKey =
        this.lookups[this.lookupsIndex].lookupListKey;
      this.dropdownElementModel!.child!.widgetConfiguration!.lookupIdKey =
        this.lookups[this.lookupsIndex].lookupIdKey;
      this.dropdownElementModel!.child!.widgetConfiguration!.lookupTextKey =
        this.lookups[this.lookupsIndex].lookupTextKey;
    }

    if (this.dropdownElementModel!.child!.validations === undefined) {
      this.dropdownElementModel!.child!.validations = new Validations();
    }
    this.dropdownElementModel!.child!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.dropdownElementModel!.child!.widget_type =
      AppConstants.WIDGET_DROPDOWN;
    console.log(this.dropdownElementModel);
    this.elementService.onSaveItem(this.dropdownElementModel!, this.index);
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
  }
}
