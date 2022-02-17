import { Component, Input, OnInit } from '@angular/core';
import { SavedScreensComponent } from '../saved-screens/saved-screens.component';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  screensOpenState = false;
  @Input() title;
  @Input() type :any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
