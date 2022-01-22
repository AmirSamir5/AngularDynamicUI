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

  title: string = '';
  hint: string = '';
  parameterName: string = '';
  isRequired: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.calendarElementModel!.validations === undefined) {
      this.calendarElementModel!.validations = new Validations();
    } else {
      this.title = this.calendarElementModel!.fieldTitle!;
      this.hint = this.calendarElementModel!.hint!;
      this.isRequired =
        this.calendarElementModel!.validations!.isMandatory === 1;
    }
  }

  onSubmit() {
    this.calendarElementModel!.fieldTitle = this.title;
    this.calendarElementModel!.hint = this.hint;
    this.calendarElementModel!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.calendarElementModel!.validations!.parameterName =
      this.parameterName;
    this.calendarElementModel!.validations!.parameterDefaultValue =
      this.parameterName;
    this.calendarElementModel!.widget_type = AppConstants.WIDGET_CALENDAR;
  }
}
