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
  title = 'appbar title';
  i = 0;
  selectedElements: WidgetModel[] = [];
  selectedElement?: WidgetModel;
  show: boolean = false;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    AppEvents.selectedElementsChangedEvent.subscribe((elements) => {
      this.selectedElements = elements;
    });
    AppEvents.onRemoveElementEvent.subscribe(
      ({ make: elementsArr, name: element }) => {
        this.selectedElements = elementsArr;
      }
    );
    AppEvents.changeAppbarEvent.subscribe(
      (appbar) => {
        this.title = appbar;
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
  editItem() {
    this.show = !this.show;
  }
  onChangeAppbar(){
    this.elementService.screenName = this.title;
  }
}
