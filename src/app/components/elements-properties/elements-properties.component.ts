import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { JSONModel } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-elements-properties',
  templateUrl: './elements-properties.component.html',
  styleUrls: ['./elements-properties.component.css']
})
export class ElementsPropertiesComponent implements OnInit {
  item:ElementModel = new ElementModel('','','',new JSONModel());
  // inputFieldItem?:InputFieldElementModel;

  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
    this.elementService.EditElementEvent.subscribe((item)=>{
      this.item = item;
    });
  }

}
