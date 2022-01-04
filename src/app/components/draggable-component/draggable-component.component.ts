import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { DropdownComponent } from '../elements/dropdown/dropdown.component';
import { TextComponent } from '../elements/text/text.component';

@Component({
  selector: 'app-draggable-component',
  templateUrl: './draggable-component.component.html',
  styleUrls: ['./draggable-component.component.css'],
})
export class DraggableComponentComponent implements OnInit {
  item = 'appbar title';

  items: ElementModel[] = [
    new ElementModel(TextComponent, ''),
    new ElementModel(DropdownComponent, ''),
    new ElementModel(TextComponent, ''),
    new ElementModel(DropdownComponent, ''),
    new ElementModel(TextComponent, ''),
  ];
  constructor() {}

  ngOnInit(): void {}

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
      this.items.splice(event.previousIndex, 1);
    }
  }
}
