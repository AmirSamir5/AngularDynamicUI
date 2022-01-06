import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  items:ElementModel[] = [];
  selectedElement?:ElementModel;
  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
    this.items = this.elementService.getElements();
  }

  elementOnClick(selectedElement:ElementModel){
    this.selectedElement = selectedElement;
    this.elementService.addSelectedItems(selectedElement);
  }

}
