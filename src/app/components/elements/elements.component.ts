import { Component, OnInit } from '@angular/core';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  readonly items:WidgetModel[] = [...this.elementService.getElements()];
  constructor(private elementService:ElementService) { }

  ngOnInit(): void {}

  elementOnClick(selectedElement:WidgetModel){
    this.elementService.addSelectedItems(selectedElement);
    this.elementService.removeRowElementItem();
  }

}
