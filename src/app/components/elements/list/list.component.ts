import { Component, Input, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tiles?: ListModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
