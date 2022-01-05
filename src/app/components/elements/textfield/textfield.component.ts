import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
  @Input() public hintText: string = 'Input Field';
  @Input() public title: string = 'Title';
  constructor() { }

  ngOnInit(): void {
  }

}
