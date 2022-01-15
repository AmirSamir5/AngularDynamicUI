import { EventEmitter } from "@angular/core";
import { ListModel } from "../models/list.model";

export class ListElementService{
    addListElementEvent = new EventEmitter<ListModel>();
    removeListElementEvent = new EventEmitter<ListModel>();
    AddRowElementEvent = new EventEmitter();
}