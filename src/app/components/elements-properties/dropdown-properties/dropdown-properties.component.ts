import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class DropdownPropertiesComponent implements OnChanges {
  @Input() dropdownElementModel?: WidgetModel;
  @Input() index: number = 0;
  isRequired: boolean = false;
  showInputFields: boolean = false;

  lookups = AppConstants.LOOKUP_LISTS;

  constructor(private elementService: ElementService) {}

  ngOnChanges(): void {
    // this.dropdownElementModel! = { ..this.dropdownElementModel! };
    if (this.dropdownElementModel!.validations === undefined) {
      this.dropdownElementModel!.validations = new Validations();
    }
    if (this.dropdownElementModel!.widgetConfiguration === undefined) {
      this.dropdownElementModel!.widgetConfiguration =
        new WidgetConfiguration();
    }
  }

  requiredClicked() {
    this.isRequired = !this.isRequired;
    this.dropdownElementModel!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
  }

  requiredValue(): boolean {
    if (
      this.dropdownElementModel!.validations!.isMandatory === 1 &&
      this.dropdownElementModel!.validations!.isMandatory !== undefined
    ) {
      return true;
    }
    return false;
  }

  selectChange(event) {
    var val = event.target.value;
    this.lookups.forEach((element) => {
      if (element.displayValue === val) {
        this.dropdownElementModel!.widgetConfiguration!.lookupListKey =
          element.lookupListKey;
        this.dropdownElementModel!.widgetConfiguration!.lookupTextKey =
          element.lookupTextKey;
      }
    });
    if (val === 'other') {
      this.showInputFields = true;
      this.dropdownElementModel!.widgetConfiguration!.lookupIdKey = '';
      this.dropdownElementModel!.widgetConfiguration!.lookupListKey = '';
      this.dropdownElementModel!.widgetConfiguration!.lookupTextKey = '';
    } else {
      this.showInputFields = false;
    }
  }
}
