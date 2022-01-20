import { EventEmitter } from '@angular/core';
import { ElementModel } from '../models/element.model';
import { ListModel } from '../models/list.model';
import { StyleModel } from '../models/style.model';
import { WidgetModel } from '../models/widget.model';

export class ListElementService {
  onElementClickEvent = new EventEmitter<{
    make: WidgetModel;
    name: number;
  }>();
  onEditElementEvent = new EventEmitter<{ make: WidgetModel; name: number }>();
  onSetStyleEvent = new EventEmitter<StyleModel>();

  onElementClick(item: WidgetModel, index: number) {
    this.onElementClickEvent.emit({ make: item, name: index });
  }
  onEditElementClick(item: WidgetModel, index: number) {
    this.onElementClickEvent.emit({ make: item, name: index });
  }
  onSetRowStyle(style: StyleModel) {
    this.onSetStyleEvent.emit(style);
  }
}
