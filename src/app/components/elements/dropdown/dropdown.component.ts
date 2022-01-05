import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() public title: string = 'Title';
  @Input() public hintText: string = 'Dropdown';
  constructor() { }

  ngOnInit(): void {
  }

}
