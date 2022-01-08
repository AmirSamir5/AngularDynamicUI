import { EventEmitter } from '@angular/core';
import { ElementModel } from '../models/element.model';
import { JSONModel } from '../models/json.model';

export class ElementService {
  addOrRemoveElementEvent = new EventEmitter<ElementModel[]>();
  EditElementEvent = new EventEmitter<ElementModel>();

  

  private elements: ElementModel[] = [
    new ElementModel('Dropdown', 'Title', 'Dropdown', new JSONModel()),
    new ElementModel('Textfield', 'Title', 'Textfield', new JSONModel()),
    new ElementModel('Button', 'Button', '', new JSONModel()),
  ];

  public selectedElements: ElementModel[] = [];

  getElements() {
    return this.elements.slice();
  }

  addSelectedItems(selectedElement: ElementModel) {
    var newRefSelectedElement = new ElementModel(
      selectedElement.type,
      selectedElement.title,
      selectedElement.hintText,
      selectedElement.json
    );
    this.selectedElements.push(newRefSelectedElement);
    this.addOrRemoveElementEvent.emit(this.selectedElements);
  }

  removeSelectedItems(index: number) {
    this.selectedElements.splice(index, 1);
    this.addOrRemoveElementEvent.emit(this.selectedElements);
  }
  
  editSelectedItem(item: ElementModel) {
    this.EditElementEvent.emit(item);
  }
}
