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
  index = 0;
  selectedElements: ElementModel[] = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.addOrRemoveElementEvent.subscribe((elements) => {
      this.selectedElements = elements;
    });
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

  removeElement(index: number) {
    this.elementService.removeSelectedItems(index);
  }

  onClickElement(item: ElementModel, index: number) {
    this.index = index;
    var component = this.elementService.editSelectedItem(item);
  }
}
