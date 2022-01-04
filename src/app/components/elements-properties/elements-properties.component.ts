import { Component, OnInit } from '@angular/core';
import { ElementPropertyService } from 'src/app/services/element-property.service';

@Component({
  selector: 'app-elements-properties',
  templateUrl: './elements-properties.component.html',
  styleUrls: ['./elements-properties.component.css']
})
export class ElementsPropertiesComponent implements OnInit {
  type:any;

  constructor(private elementPropertyService:ElementPropertyService) { }

  ngOnInit(): void {
    this.elementPropertyService.elementPropertyEvent.subscribe((type)=>{
      this.type = type;
      console.log(type);
    });
  }

}
