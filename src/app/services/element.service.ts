import { EventEmitter } from "@angular/core";
import { ButtonComponent } from "../components/elements/button/button.component";
import { DropdownComponent } from "../components/elements/dropdown/dropdown.component";
import { TextfieldComponent } from "../components/elements/textfield/textfield.component";
import { ElementModel } from "../models/element.model";

export class ElementService{
    elementChanged = new EventEmitter<ElementModel[]>();

    private elements:ElementModel[] = [
       new ElementModel(DropdownComponent,'', 'Button'),
       new ElementModel(TextfieldComponent,'', 'DropDown'),
       new ElementModel(ButtonComponent,'','Input Field'),
    ];

    public selectedElements: ElementModel[] = [];

    getElements(){
        return this.elements.slice();
    }

    addSelectedItems(selectedElement:ElementModel){
        this.selectedElements.push(selectedElement);
        this.elementChanged.emit(this.selectedElements);
    }

    removeSelectedItems(index:number){
        this.selectedElements.splice(index,1);
        this.elementChanged.emit(this.selectedElements);
    }
}