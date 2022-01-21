import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { Validations } from 'src/app/models/widget.model';

@Component({
  selector: 'app-calendar-properties',
  templateUrl: './calendar-properties.component.html',
  styleUrls: ['./calendar-properties.component.css'],
})
export class CalendarPropertiesComponent implements OnInit {
  @Input() calendarElementModel?: ElementModel;
  @Input() index: number = 0;

  title: string = '';
  hint: string = '';
  parameterName: string = '';
  isRequired: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.calendarElementModel!.widget.validations === undefined) {
      this.calendarElementModel!.widget.validations = new Validations();
    } else {
      this.title = this.calendarElementModel!.widget.fieldTitle!;
      this.hint = this.calendarElementModel!.widget.hint!;
      this.isRequired =
        this.calendarElementModel!.widget.validations!.isMandatory === 1;
    }
  }

  onSubmit() {
    this.calendarElementModel!.widget.fieldTitle = this.title;
    this.calendarElementModel!.widget.hint = this.hint;
    this.calendarElementModel!.widget.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.calendarElementModel!.widget.validations!.parameterName =
      this.parameterName;
    this.calendarElementModel!.widget.validations!.parameterDefaultValue =
      this.parameterName;
    this.calendarElementModel!.widget.widget_type = AppConstants.WIDGET_CALENDAR;
  }
}
