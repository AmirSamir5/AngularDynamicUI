import { JSONModel } from "./json.model";

export class ElementModel{
    

    constructor(
        public type:string,
        public json:JSONModel,){
    }
}