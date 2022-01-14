import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'Text', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Text', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Text', cols: 3, rows: 1, color: 'lightpink' },
    { text: 'Button', cols: 1, rows: 1, color: '#DDBDF1' },
    { text: 'Text', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Button', cols: 3, rows: 1, color: '#DDBDF1' },
  ];

  constructor() {}

  ngOnInit(): void {}

  drag(event: CdkDragDrop<Tile[]>) {
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
