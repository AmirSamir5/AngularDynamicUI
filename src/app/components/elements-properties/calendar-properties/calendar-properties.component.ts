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
    if (this.calendarElementModel!.json.validations === undefined) {
      this.calendarElementModel!.json.validations = new Validations();
    } else {
      this.title = this.calendarElementModel!.json.fieldTitle!;
      this.hint = this.calendarElementModel!.json.hint!;
      this.isRequired =
        this.calendarElementModel!.json.validations!.isMandatory === 1;
    }
  }

  onSubmit() {
    this.calendarElementModel!.json.fieldTitle = this.title;
    this.calendarElementModel!.json.hint = this.hint;
    this.calendarElementModel!.json.validations!.isMandatory = this.isRequired
      ? 1
      : 0;
    this.calendarElementModel!.json.validations!.parameterName =
      this.parameterName;
    this.calendarElementModel!.json.validations!.parameterDefaultValue =
      this.parameterName;
    this.calendarElementModel!.json.widget_type = AppConstants.WIDGET_CALENDAR;
  }
}
