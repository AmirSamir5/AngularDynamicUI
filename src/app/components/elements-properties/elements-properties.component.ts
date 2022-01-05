import { Component, OnInit } from '@angular/core';
import { ElementPropertyService } from 'src/app/services/element-property.service';
import { ButtonComponent } from '../elements/button/button.component';
import { DropdownComponent } from '../elements/dropdown/dropdown.component';
import { TextfieldComponent } from '../elements/textfield/textfield.component';
import { ButtonPropertiesComponent } from './button-properties/button-properties.component';
import { DropdownPropertiesComponent } from './dropdown-properties/dropdown-properties.component';
import { TextfieldPropertiesComponent } from './textfield-properties/textfield-properties.component';

@Component({
  selector: 'app-elements-properties',
  templateUrl: './elements-properties.component.html',
  styleUrls: ['./elements-properties.component.css']
})
export class ElementsPropertiesComponent implements OnInit {
  type:any;

  constructor(private elementPropertyService:ElementPropertyService) { }

  ngOnInit(): void {
    this.elementPropertyService.elementPropertyEvent.subscribe((item)=>{
      switch(item.type){
            case 'Button':
                this.type = ButtonPropertiesComponent;
                return;
            case 'Textfield':
              this.type = TextfieldPropertiesComponent;
                return;
            case 'Dropdown':
              this.type = DropdownPropertiesComponent;
                return;      
        }
    });
  }

}
