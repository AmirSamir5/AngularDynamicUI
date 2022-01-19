import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  justify = 'space-between';
  padding = '24px';
  style: StyleModel = new StyleModel({});
  @Input() rows?: ListModel[];

  constructor(private listService: ListElementService) {}

  ngOnInit(): void {}

  onElementClick(item: ListModel, index: number) {
    this.listService.onElementClick(item, index);
  }

  removeElement(index: number) {
    this.rows?.splice(index, 1);
  }

  drag(event: CdkDragDrop<ListModel[]>) {
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
    }
  }
}
