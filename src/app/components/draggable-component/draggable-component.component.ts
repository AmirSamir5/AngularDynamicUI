import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-draggable-component',
  templateUrl: './draggable-component.component.html',
  styleUrls: ['./draggable-component.component.css'],
})
export class DraggableComponentComponent implements OnInit {
  height = 350;
  item = 'appbar title';
  i = 0;
  selectedElements: ElementModel[] = [];
  selectedElement?:ElementModel;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.selectedElementsChangedEvent.subscribe((elements) => {
      this.selectedElements = elements;
    });
    this.elementService.onRemoveElementEvent.subscribe(({ make: elementsArr, name: element }) => {
      this.selectedElements = elementsArr;
    });
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

  removeElement(index: number) {
    this.elementService.removeSelectedItems(index);
  }

  onClickElement(item: ElementModel, index: number) {
    this.i = index;
    this.selectedElement = item;
    var component = this.elementService.editSelectedItem(item,index);
  }
}
