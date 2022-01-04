import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-draggable-component',
  templateUrl: './draggable-component.component.html',
  styleUrls: ['./draggable-component.component.css']
})
export class DraggableComponentComponent implements OnInit {
  item = 'appbar title';
  selectedElements:ElementModel[] = [];
  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
    this.elementService.elementChanged.subscribe((elements) => {
      this.selectedElements = elements;
    })
  }

  editItem(item:string){
    this.item = item;
  }

}
