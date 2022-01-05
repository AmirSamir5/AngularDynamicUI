import { Component, OnInit } from '@angular/core';
import { DropdownElementModel } from 'src/app/models/dropdown-element.model';
import { ElementPropertyService } from 'src/app/services/element-property.service';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';

@Component({
  selector: 'app-dropdown-properties',
  templateUrl: './dropdown-properties.component.html',
  styleUrls: ['./dropdown-properties.component.css'],
})
export class DropdownPropertiesComponent implements OnInit {
  dropdownElementModel: DropdownElementModel = new DropdownElementModel(
    'Dropdown',
    '',
    '',
    '',
    false,
    ''
  );

  constructor(private elementPropertyService: ElementPropertyService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(
      this.dropdownElementModel.title,
      this.dropdownElementModel.hintText,
      this.dropdownElementModel.lookupListKey,
      this.dropdownElementModel.isMandetory
    );
    this.elementPropertyService.dropdownSubmit(this.dropdownElementModel);
  }
}
