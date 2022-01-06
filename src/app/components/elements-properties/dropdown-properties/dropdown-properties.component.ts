import { Component, Input, OnInit } from '@angular/core';
import { DropdownElementModel } from 'src/app/models/dropdown-element.model';
import { ElementPropertyService } from 'src/app/services/element-property.service';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';

@Component({
  selector: 'app-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.css'],
})
export class DropdownPropertiesComponent implements OnInit {
  @Input() dropdownElementModel: DropdownElementModel = new DropdownElementModel(
    'Dropdown',
    '',
    '',
    '',
    false,
    ''
  );

  constructor(private elementPropertyService: ElementPropertyService) {}

  ngOnInit(): void {
    this.clearDropDownModel();
  }

  onSubmit() {
    if((this.dropdownElementModel.title === '') ||
    (this.dropdownElementModel.lookupListKey === '') ||
    (this.dropdownElementModel.hintText === '')){
      confirm('Please Fill All Fields');
      return;
    }
    this.elementPropertyService.dropdownSaveEvent(this.dropdownElementModel);
    
  }

  clearDropDownModel(){
    this.dropdownElementModel = new DropdownElementModel(
      'Dropdown',
      '',
      '',
      '',
      false,
      ''
    );
  }
}
