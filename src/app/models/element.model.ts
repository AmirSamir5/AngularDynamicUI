export class ElementModel{
    public json:string;
    public type:any;
    public title:string;

    constructor(element:any, json:string, title:string){
        this.type = element;
        this.json = json;
        this.title = title;
    }
}