import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

}
