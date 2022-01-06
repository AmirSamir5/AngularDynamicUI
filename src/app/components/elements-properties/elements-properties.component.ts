import { Component, OnInit } from '@angular/core';
import { DropdownElementModel } from 'src/app/models/dropdown-element.model';
import { ElementModel } from 'src/app/models/element.model';
import { ElementPropertyService } from 'src/app/services/element-property.service';

@Component({
  selector: 'app-elements-properties',
  templateUrl: './elements-properties.component.html',
  styleUrls: ['./elements-properties.component.css']
})
export class ElementsPropertiesComponent implements OnInit {
  item?:ElementModel;
  dropdownItem?:DropdownElementModel;
  // inputFieldItem?:DropdownElementModel;

  constructor(private elementPropertyService:ElementPropertyService) { }

  ngOnInit(): void {
    this.elementPropertyService.elementPropertyEvent.subscribe((item)=>{
      this.item = item;
      if(item instanceof DropdownElementModel){
        this.dropdownItem = item;
        console.log(this.dropdownItem);
      }
    });
  }

}
