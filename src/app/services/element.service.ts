import { EventEmitter } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { JSONModel } from '../models/json.model';
import { WidgetModel } from '../models/widget.model';

export class ElementService {
  changeAppbarEvent = new EventEmitter<string>();
  selectedElementsChangedEvent = new EventEmitter<WidgetModel[]>();
  clearPropertiesEvent  = new EventEmitter();
  onRemoveElementEvent = new EventEmitter<{
    make: WidgetModel[];
    name: WidgetModel;
  }>();
  EditElementEvent = new EventEmitter<{ make: WidgetModel; name: number }>();
  EditRowElementEvent = new EventEmitter<{ make: WidgetModel; name: number }>();
  RemoveRowElementEvent = new EventEmitter();

  readonly elements: WidgetModel[] = [
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
        widget_type: AppConstants.WIDGET_CONTAINER,
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_COLUMN,
          children: [],
        }),
      }),
    }),
    new WidgetModel({ widget_type: AppConstants.WIDGET_ROW, name: 'Row' }),
    new WidgetModel({
      widget_type: AppConstants.WIDGET_CALENDAR,
      name: 'Calendar',
    }),
    new WidgetModel({
      widget_type: AppConstants.WIDGET_CHECKBOX,
      name: 'Checkbox',
    }),
  ];

  public screenName: string = '';

  public selectedElements: WidgetModel[] = [];

  getElements() {
    return this.elements.slice();
  }

  clearProperties(){
    this.clearPropertiesEvent.emit();
  }

  addSelectedItems(selectedElement: WidgetModel) {
    var temp = {...selectedElement};
    this.selectedElements.push(temp);
    this.selectedElementsChangedEvent.emit(this.selectedElements);
  }

  removeSelectedItems(index: number) {
    var element: WidgetModel = this.selectedElements[index];
    this.selectedElements.splice(index, 1);
    this.onRemoveElementEvent.emit({
      make: this.selectedElements,
      name: element,
    });
  }

  editSelectedItem(item: WidgetModel, index: number) {
    this.EditElementEvent.emit({ make: item, name: index });
  }

  onSaveItem(item: WidgetModel, index: number) {
    this.selectedElements[index] = item;
    this.selectedElementsChangedEvent.emit(this.selectedElements);
    console.log(this.selectedElements);
  }

  editRowElementItem(item: WidgetModel, index: number) {
    this.EditRowElementEvent.emit({ make: item, name: index });
  }

  removeRowElementItem() {
    this.RemoveRowElementEvent.emit();
  }
}
