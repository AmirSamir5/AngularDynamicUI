import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementPropertyService } from 'src/app/services/element-property.service';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-draggable-component',
  templateUrl: './draggable-component.component.html',
  styleUrls: ['./draggable-component.component.css'],
})
export class DraggableComponentComponent implements OnInit {
  item = 'appbar title';
  selectedElements:ElementModel[] = [];
  
  constructor(private elementService:ElementService, private elementPropertyService:ElementPropertyService) { }

  ngOnInit(): void {
    this.elementService.elementChanged.subscribe((elements) => {
      this.selectedElements = elements;
    })
  }

  editItem(item: string) {
    this.item = item;
  }

  drag(event: CdkDragDrop<ElementModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.selectedElements.splice(event.previousIndex, 1);
    }
  }

  removeElement(index:number){
    this.elementService.removeSelectedItems(index);
  }

  onClickElement(type:any){
    var component = this.elementPropertyService.checkProperty(type);
  }
}
