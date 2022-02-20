import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() public title?: string;
  @Input() public hintText?: string;
  constructor() {}

  ngOnInit(): void {
    if (this.title === undefined) {
      this.title = 'Label';
    }
    if (this.hintText === undefined) {
      this.hintText = 'Select Item';
    }
  }
}
