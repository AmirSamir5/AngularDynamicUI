import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';
import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() tiles?: ListModel[];

  constructor(private listService:ListElementService) { }

  ngOnInit(): void {}

  onElementClick(item:ListModel,index:number){
    this.listService.onElementClick(item,index);
  }

  removeElement(index:number){
    this.tiles?.splice(index,1);
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
