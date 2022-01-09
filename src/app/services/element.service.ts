import { EventEmitter } from '@angular/core';
import { ElementModel } from '../models/element.model';
import { JSONModel } from '../models/json.model';

export class ElementService {
  selectedElementsChangedEvent = new EventEmitter<ElementModel[]>();
  EditElementEvent = new EventEmitter<{make:ElementModel,name:number}>();
  

  readonly elements: ElementModel[] = [
    new ElementModel('Dropdown', new JSONModel()),
    new ElementModel('Textfield', new JSONModel()),
    new ElementModel('Button',  new JSONModel()),
  ];

  public selectedElements: ElementModel[] = [];

  getElements() {
    return this.elements.slice();
  }

  addSelectedItems(selectedElement: ElementModel) {
    var element = new ElementModel(selectedElement.type,new JSONModel());
    this.selectedElements.push(element);
    this.selectedElementsChangedEvent.emit(this.selectedElements);
  }

  removeSelectedItems(index: number) {
    this.selectedElements.splice(index, 1);
    this.selectedElementsChangedEvent.emit(this.selectedElements);
  }

  editSelectedItem(item: ElementModel,index:number) {
    this.EditElementEvent.emit({make:item,name:index});
  }

  onSaveItem(item:ElementModel,index:number){
    this.selectedElements[index] = item;
    this.selectedElementsChangedEvent.emit(this.selectedElements);
    console.log(this.selectedElements);
  }
}
