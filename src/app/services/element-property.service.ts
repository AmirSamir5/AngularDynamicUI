import { EventEmitter } from '@angular/core';
import { ButtonPropertiesComponent } from '../components/elements-properties/button-properties/button-properties.component';
import { DropdownPropertiesComponent } from '../components/elements-properties/dropdown-properties/dropdown-properties.component';
import { TextfieldPropertiesComponent } from '../components/elements-properties/textfield-properties/textfield-properties.component';
import { ButtonComponent } from '../components/elements/button/button.component';
import { DropdownComponent } from '../components/elements/dropdown/dropdown.component';
import { TextfieldComponent } from '../components/elements/textfield/textfield.component';
import { ElementModel } from '../models/element.model';

export class ElementPropertyService {
  elementPropertyEvent = new EventEmitter<ElementModel>();
  buttonSubmitEvent = new EventEmitter<string>();
  dropdownSubmitEvent = new EventEmitter<ElementModel>();
  inputFieldSubmitEvent = new EventEmitter<ElementModel>();

  checkProperty(item: ElementModel) {
    this.elementPropertyEvent.emit(item);
  }

  buttonSaveEvent(buttonTitle: string) {
    this.buttonSubmitEvent.emit(buttonTitle);
  }

  dropdownSaveEvent(dropdownElementModel: ElementModel) {
    this.dropdownSubmitEvent.emit(dropdownElementModel);
  }

  inputFieldSaveEvent(inputFieldElementModel: ElementModel) {
    this.inputFieldSubmitEvent.emit(inputFieldElementModel);
  }
}
