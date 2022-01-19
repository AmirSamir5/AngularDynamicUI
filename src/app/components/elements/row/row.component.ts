import { Component, Input, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() style:StyleModel = new StyleModel({});
  @Input() rows?: ListModel[];

  onElementClick(item:ListModel,index:number){
    this.listService.onElementClick(item,index);
  }

  removeElement(index:number){
    this.rows?.splice(index,1);
  }

  constructor(private listService:ListElementService) { }

  ngOnInit(): void {
    this.listService.onSetStyleEvent.subscribe((style)=>{
      this.style = style;
    });
  }

}
