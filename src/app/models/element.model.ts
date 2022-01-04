export class ElementModel{
    public json:string;
    public type:any;

    constructor(element:any, json:string){
        this.type = element;
        this.json = json;
    }
}