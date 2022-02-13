import { EventEmitter } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { ScreenModel, ScreenPages } from '../models/screen.model';
import { WidgetModel } from '../models/widget.model';
import { AppEvents } from './app-events';
import { elements } from './elements-array';

export class ElementService {
  screenModel: ScreenModel = new ScreenModel({});

  public selectedElements: WidgetModel[] = [];

  getElements() {
    return elements.slice();
  }

  clearProperties() {
    AppEvents.clearPropertiesEvent.emit();
  }

  savedScreenChoosed(screen: ScreenModel) {
    this.screenModel = screen;
    AppEvents.onScreenSelectEvent.emit(screen);
  }

  addSelectedItems(selectedElement: WidgetModel) {
    var temp = { ...selectedElement };
    this.selectedElements.push(temp);
    AppEvents.selectedElementsChangedEvent.emit(this.selectedElements);
  }

  removeSelectedItems(index: number) {
    var element: WidgetModel = this.selectedElements[index];
    this.selectedElements.splice(index, 1);
    AppEvents.onRemoveElementEvent.emit({
      make: this.selectedElements,
      name: element,
    });
  }

  editSelectedItem(item?: WidgetModel, index?: number) {
    AppEvents.EditElementEvent.emit({ make: item, name: index });
  }

  onSaveItem(item: WidgetModel, index: number) {
    this.selectedElements[index] = item;
    AppEvents.selectedElementsChangedEvent.emit(this.selectedElements);
    console.log(this.selectedElements);
  }

  editRowElementItem(item: WidgetModel, index: number) {
    AppEvents.EditRowElementEvent.emit({ make: item, name: index });
  }

  removeRowElementItem() {
    AppEvents.RemoveRowElementEvent.emit();
  }
}
