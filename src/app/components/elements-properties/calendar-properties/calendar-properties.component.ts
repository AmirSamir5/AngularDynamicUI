import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { Validations, WidgetModel } from 'src/app/models/widget.model';

@Component({
  selector: 'app-calendar-properties',
  templateUrl: './calendar-properties.component.html',
  styleUrls: ['./calendar-properties.component.css'],
})
export class CalendarPropertiesComponent implements OnInit {
  @Input() calendarElementModel?: WidgetModel;
  @Input() index: number = 0;
  parameterName: string = '';
  isRequired: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // this.calendarElementModel!.child! = {
    //   ...this.calendarElementModel!.child!,
    // };
    if (this.calendarElementModel!.validations === undefined) {
      this.calendarElementModel!.validations = new Validations();
    } else {
      this.isRequired =
        this.calendarElementModel!.validations!.isMandatory === 1;
    }
  }

  onRequiredChange(){
    this.calendarElementModel!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
  }
}
