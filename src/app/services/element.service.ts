import { EventEmitter } from '@angular/core';
import { ElementModel } from '../models/element.model';
import { JSONModel } from '../models/json.model';
import { WidgetModel } from '../models/widget.model';

export class ElementService {
  selectedElementsChangedEvent = new EventEmitter<ElementModel[]>();
  onRemoveElementEvent = new EventEmitter<{
    make: ElementModel[];
    name: ElementModel;
  }>();
  EditElementEvent = new EventEmitter<{ make: ElementModel; name: number }>();
  EditRowElementEvent = new EventEmitter<{ make: ElementModel; name: number }>();
  RemoveRowElementEvent = new EventEmitter();

  readonly elements: ElementModel[] = [
    new ElementModel('Dropdown', new WidgetModel()),
    new ElementModel('Textfield', new WidgetModel()),
    new ElementModel('Button',  new WidgetModel()),
    new ElementModel('List',  new WidgetModel()),
    new ElementModel('Row',  new WidgetModel()),
    new ElementModel('Calendar', new WidgetModel()),
    new ElementModel('Checkbox', new WidgetModel()),
  ];

  public screenName:string = '';

  public selectedElements: ElementModel[] = [];

  getElements() {
    return this.elements.slice();
  }

  addSelectedItems(selectedElement: ElementModel) {
    var element = new ElementModel(selectedElement.type, new WidgetModel());
    this.selectedElements.push(element);
    this.selectedElementsChangedEvent.emit(this.selectedElements);
  }

  removeSelectedItems(index: number) {
    var element: ElementModel = this.selectedElements[index];
    this.selectedElements.splice(index, 1);
    this.onRemoveElementEvent.emit({
      make: this.selectedElements,
      name: element,
    });
  }

  editSelectedItem(item: ElementModel, index: number) {
    this.EditElementEvent.emit({ make: item, name: index });
  }

  onSaveItem(item: ElementModel, index: number) {
    this.selectedElements[index] = item;
    this.selectedElementsChangedEvent.emit(this.selectedElements);
    console.log(this.selectedElements);
  }

  editRowElementItem(item: ElementModel, index: number) {
    this.EditRowElementEvent.emit({ make: item, name: index });
  }

  removeRowElementItem(){
    this.RemoveRowElementEvent.emit();
  }
}
