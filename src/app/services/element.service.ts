import { EventEmitter } from '@angular/core';
import { ElementModel } from '../models/element.model';
import { JSONModel } from '../models/json.model';

export class ElementService {
  elementChanged = new EventEmitter<ElementModel[]>();

  private elements: ElementModel[] = [
    new ElementModel('Dropdown', 'Title', 'Dropdown', new JSONModel()),
    new ElementModel('Textfield', 'Title', 'Textfield', new JSONModel()),
    new ElementModel('Button', 'Button', '', new JSONModel()),
    // new ElementModel('PaymentMethods', 'PaymentMethods', '', new JSONModel()),
    // new ElementModel('Numeric', 'Numeric', '', new JSONModel()),
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
    this.elementChanged.emit(this.selectedElements);
  }

  removeSelectedItems(index: number) {
    this.selectedElements.splice(index, 1);
    this.elementChanged.emit(this.selectedElements);
  }
}
