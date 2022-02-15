import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  screensOpenState = false;
  elementsOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
