import { WidgetModel } from "./widget.model";

export class ElementModel{
    constructor(
        public type:string,
        public json:WidgetModel,){
    }
}