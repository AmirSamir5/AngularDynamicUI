import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-component',
  templateUrl: './draggable-component.component.html',
  styleUrls: ['./draggable-component.component.css']
})
export class DraggableComponentComponent implements OnInit {
  item = 'appbar title';
  constructor() { }

  ngOnInit(): void {
  }

  editItem(item:string){
    this.item = item;
  }

}
