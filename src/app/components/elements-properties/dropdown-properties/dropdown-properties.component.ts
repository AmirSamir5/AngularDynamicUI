import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.css'],
})
export class DropdownPropertiesComponent implements OnInit {
  @Input() dropdownElementModel?: ElementModel

  constructor(private elementService:ElementService) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    if((this.dropdownElementModel?.json.fieldTitle === null) ||
    (this.dropdownElementModel?.json.widgetConfiguration?.dropDownConfiguration?.lookupListKey === null) ||
    (this.dropdownElementModel?.json.hint === null)){
      confirm('Please Fill All Fields');
      return;
    }
    // this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel!);
    
  }
}
