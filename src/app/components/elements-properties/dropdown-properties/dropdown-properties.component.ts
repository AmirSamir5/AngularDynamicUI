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
    this.dropdownElementModel!.child = { ...this.dropdownElementModel!.child! };
    if (this.dropdownElementModel!.child!.validations === undefined) {
      this.dropdownElementModel!.child!.validations = new Validations();
    }
    if (this.dropdownElementModel!.child!.widgetConfiguration === undefined) {
      this.dropdownElementModel!.child!.widgetConfiguration =
        new WidgetConfiguration();
    }
  }

  requiredClicked() {
    this.isRequired = !this.isRequired;
    this.dropdownElementModel!.child!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
  }

  requiredValue():boolean{
    if(this.dropdownElementModel!.child!.validations!.isMandatory === 1 && this.dropdownElementModel!.child!.validations!.isMandatory !== undefined){
      return true;
    }
    return false;
  }

  selectChange(event) {
    var val = event.target.value;
    this.lookups.forEach(
      (element) =>{
        if(element.displayValue === val){
          this.dropdownElementModel!.child!.widgetConfiguration!.lookupIdKey = element.lookupIdKey;
          this.dropdownElementModel!.child!.widgetConfiguration!.lookupListKey = element.lookupListKey;
          this.dropdownElementModel!.child!.widgetConfiguration!.lookupTextKey = element.lookupTextKey;
        }
      }
    );
    if (val === 'other') {
      this.showInputFields = true;
    } else {
      this.showInputFields = false;
    }
  }

  onSubmit() {
    if (this.dropdownElementModel!.child!.widgetConfiguration === undefined) {
      this.dropdownElementModel!.child!.widgetConfiguration =
        new WidgetConfiguration();
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
  }
}
