import { EventEmitter } from "@angular/core";
import { ListModel } from "../models/list.model";
import { StyleModel } from "../models/style.model";

export class ListElementService{
    onElementClickEvent = new EventEmitter<{make:ListModel,name:number}>();
    onEditElementEvent = new EventEmitter<{make:ListModel,name:number}>();
    onSetStyleEvent = new EventEmitter<StyleModel>();

    onElementClick(item:ListModel,index:number){
        this.onElementClickEvent.emit({make:item,name:index});
    }
    onEditElementClick(item:ListModel,index:number){
        this.onElementClickEvent.emit({make:item,name:index});
    }
    onSetRowStyle(style:StyleModel){
        this.onSetStyleEvent.emit(style);
    }
}