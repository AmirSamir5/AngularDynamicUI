import { EventEmitter } from "@angular/core";
import { ElementModel } from "../models/element.model";

export class ElementService{
    elementChanged = new EventEmitter<ElementModel[]>();

    private elements:ElementModel[] = [
       new ElementModel('Dropdown', 'Title', 'Dropdown',''),
       new ElementModel('Textfield','Title','Textfield',''),
       new ElementModel('Button','Button','',''),
    ];

    public selectedElements: ElementModel[] = [];

    getElements(){
        return this.elements.slice();
    }

    addSelectedItems(selectedElement:ElementModel){
        console.log('Elements ' , this.elements);
        this.selectedElements.push(selectedElement);
        this.elementChanged.emit(this.selectedElements);
    }

    removeSelectedItems(index:number){
        this.selectedElements.splice(index,1);
        this.elementChanged.emit(this.selectedElements);
    }
}