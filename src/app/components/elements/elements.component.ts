import { Component, OnInit } from '@angular/core';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  items:WidgetModel[] = [];
  selectedElement?:WidgetModel;
  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
    this.items = [...this.elementService.getElements()];
  }

  elementOnClick(selectedElement:WidgetModel){
    this.selectedElement = selectedElement;
    this.elementService.addSelectedItems(selectedElement);
    this.elementService.removeRowElementItem();
  }

}
