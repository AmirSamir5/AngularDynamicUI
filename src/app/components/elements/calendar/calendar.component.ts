import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() title?: string;
  @Input() hintText?: string;
  @Input() initial?: string;
  @Input() from?: string;
  @Input() to?: string;

  constructor() {}

  ngOnInit(): void {
    if (this.title === undefined) {
      this.title = 'Title';
    }
    if (this.hintText === undefined) {
      this.hintText = 'Calendar';
    }
  }
}
