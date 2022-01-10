import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { WidgetConfiguration } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.css'],
})
export class DropdownPropertiesComponent implements OnInit {
  @Input() dropdownElementModel?: ElementModel;
  @Input() index: number = 0;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    if (this.dropdownElementModel!.json.widgetConfiguration === undefined)
      this.dropdownElementModel!.json.widgetConfiguration =
        new WidgetConfiguration();
    this.dropdownElementModel!.json.widgetConfiguration.lookupListKey = '';
  }

  onSubmit() {
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
    this.dropdownElementModel!.json.widget_type = AppConstants.WIDGET_DROPDOWN;
    this.elementService.onSaveItem(this.dropdownElementModel!, this.index);
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
  }
}
