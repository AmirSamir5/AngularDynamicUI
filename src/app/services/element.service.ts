import { EventEmitter } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { JSONModel, ScreenPages } from '../models/json.model';
import { Border, BoxDecoration, StyleModel } from '../models/style.model';
import { WidgetModel } from '../models/widget.model';
import { AppEvents } from './app-events';
import { elements } from './elements-array';

export class ElementService {
  screenModel: ScreenPages = new ScreenPages('', []);

  public screenName: string = '';
  public screenLookup: string = '';
  public screenId?: number;

  public selectedElements: WidgetModel[] = [];

  getElements() {
    return elements.slice();
  }

  clearProperties() {
    AppEvents.clearPropertiesEvent.emit();
  }

  savedScreenChoosed(screen: JSONModel) {
    this.screenModel = screen.screenPages[0];
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
