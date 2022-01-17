import { Component, Input, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  justify = "space-between";
  padding = "24px";
  style:StyleModel = new StyleModel({});
  @Input() rows?: ListModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
