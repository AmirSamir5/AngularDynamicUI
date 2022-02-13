import { AppConstants } from '../constants/constants';
import { StyleModel } from '../models/style.model';
import { WidgetModel } from '../models/widget.model';

export const elements: WidgetModel[] = [
  new WidgetModel({
    widget_type: AppConstants.WIDGET_DROPDOWN,
    name: 'Dropdown',
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_INPUT_FIELD,
    name: 'Input Field',
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_SUBMIT_BUTTON,
    name: 'Button',
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_LIST,
    name: 'List',
    cell: new WidgetModel({
      widget_type: AppConstants.WIDGET_COLUMN,
      children: [],
    }),
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_ROW,
    name: 'Row',
    children: [],
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_COLUMN,
    name: 'Column',
    children: [],
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_CALENDAR,
    widgetConfiguration: { DateFormat: 'single date' },
    name: 'Calendar',
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_CHECKBOX,
    name: 'Checkbox',
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_CONTAINER,
    name: 'Container',
    child: new WidgetModel({
      widget_type: AppConstants.WIDGET_COLUMN,
      children: [],
    }),
  }),
];
