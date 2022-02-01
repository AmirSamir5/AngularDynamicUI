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
    this.calendarElementModel!.child! = {
      ...this.calendarElementModel!.child!,
    };
    if (this.calendarElementModel!.child!.validations === undefined) {
      this.calendarElementModel!.child!.validations = new Validations();
    } else {
      this.title = this.calendarElementModel!.child!.fieldTitle!;
      this.hint = this.calendarElementModel!.child!.hint!;
      this.isRequired =
        this.calendarElementModel!.child!.validations!.isMandatory === 1;
    }
  }

  onSubmit() {
    this.calendarElementModel!.child!.fieldTitle = this.title;
    this.calendarElementModel!.child!.hint = this.hint;
    this.calendarElementModel!.child!.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.calendarElementModel!.child!.validations!.parameterName =
      this.parameterName;
    this.calendarElementModel!.child!.validations!.parameterDefaultValue =
      this.parameterName;
    this.calendarElementModel!.child!.widget_type =
      AppConstants.WIDGET_CALENDAR;
  }
}
