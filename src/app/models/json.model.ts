import { WidgetModel } from "./widget.model";

export class JSONModel{
    constructor(
        public screen_name:string,
        public screen_id:number,
        public screenPages:ScreenPages[],
        ){}
}

export class ScreenPages{
    constructor(
        public page_name:string,
        public fields:Array<WidgetModel>
        ){}
}