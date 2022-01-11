import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css'],
})
export class TextfieldComponent implements OnInit {
  @Input() public hintText?: string;
  @Input() public title?: string;
  constructor() {}

  ngOnInit(): void {
    if (this.hintText === undefined) {
      this.hintText = 'Input Field';
    }
    if (this.title === undefined) {
      this.title = 'Title';
    }
  }
}
