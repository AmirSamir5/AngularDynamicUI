import { EventEmitter } from "@angular/core";
import { ListModel } from "../models/list.model";

export class ListElementService{
    onElementClickEvent = new EventEmitter<{make:ListModel,name:number}>();
    onEditElementEvent = new EventEmitter<{make:ListModel,name:number}>();

    onElementClick(item:ListModel,index:number){
        this.onElementClickEvent.emit({make:item,name:index});
    }
    onEditElementClick(item:ListModel,index:number){
        this.onElementClickEvent.emit({make:item,name:index});
    }
}