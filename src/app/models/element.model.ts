import { JSONModel } from "./json.model";

export class ElementModel{
    

    constructor(
        public type:string,
        public title:string,
        public hintText:string,
        public json:JSONModel,){
    }
}