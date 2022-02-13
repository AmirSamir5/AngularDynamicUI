import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-draggable-component',
  templateUrl: './draggable-component.component.html',
  styleUrls: ['./draggable-component.component.css'],
})
export class DraggableComponentComponent implements OnInit {
  height = 350;
  title?: string;
  i = 0;
  selectedElements: WidgetModel[] = [];
  selectedElement?: WidgetModel;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.title = this.elementService.screenModel?.screen_name;
    AppEvents.selectedElementsChangedEvent.subscribe((elements) => {
      this.selectedElements = elements;
    });
    AppEvents.onRemoveElementEvent.subscribe(
      ({ make: elementsArr, name: element }) => {
        this.selectedElements = elementsArr;
      }
    );
    AppEvents.onScreenSelectEvent.subscribe(
      (screen) => {
        this.title = screen.screen_name!;
      }
    );
  }

  drag(event: CdkDragDrop<WidgetModel[]>) {
    console.log(
      event.container,
      event.previousContainer,
      event.container === event.previousContainer
    );
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

  onAppbarPressed(){
    this.elementService.editSelectedItem(undefined, undefined);
  }

  removeElement(index: number) {
    this.elementService.removeSelectedItems(index);
  }

  onClickElement(item: WidgetModel, index: number) {
    this.i = index;
    this.selectedElement = item;
    var component = this.elementService.editSelectedItem(this.selectedElement, index);
  }
}
