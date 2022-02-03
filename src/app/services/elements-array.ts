import { AppConstants } from '../constants/constants';
import { Border, BoxDecoration, StyleModel } from '../models/style.model';
import { WidgetModel } from '../models/widget.model';

export const elements: WidgetModel[] = [
  new WidgetModel({
    widget_type: AppConstants.WIDGET_CONTAINER,
    name: 'Dropdown',
    style: new StyleModel({
      margin: { top: 10, bottom: 10 },
      decoration: new BoxDecoration({
        borderRadius: {
          bottomLeft: 10,
          bottomRight: 10,
          topLeft: 10,
          topRight: 10,
        },
        border: new Border({ style: 'solid', color: 1692879254, width: 1 }),
      }),
    }),
    child: new WidgetModel({ widget_type: AppConstants.WIDGET_DROPDOWN }),
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
    widget_type: AppConstants.WIDGET_CONTAINER,
    name: 'List',
    child: {
      widget_type: AppConstants.WIDGET_LIST,
      cell: new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_COLUMN,
          children: [],
        }),
      }),
      style: new StyleModel({}),
    },
  }),
  new WidgetModel({ widget_type: AppConstants.WIDGET_ROW, name: 'Row' }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_CONTAINER,
    name: 'Col',
    child: {
      widget_type: AppConstants.WIDGET_COLUMN,
      style: new StyleModel({}),
    },
  }),
  new WidgetModel({
    widget_type: AppConstants.WIDGET_CONTAINER,
    name: 'Calendar',
    style: {
      expanded: false,
      margin: { bottom: 10, top: 10 },
    },
    child: {
      widget_type: AppConstants.WIDGET_CALENDAR,
      widgetConfiguration: { DateFormat: 'single date' },
      style: {
        expanded: false,
      },
    },
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
