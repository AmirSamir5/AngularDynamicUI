import { ButtonComponent } from "../components/elements/button/button.component";
import { DropdownComponent } from "../components/elements/dropdown/dropdown.component";
import { TextComponent } from "../components/elements/text/text.component";
import { TextfieldComponent } from "../components/elements/textfield/textfield.component";
import { ElementModel } from "../models/element.model";

export class ElementService{
    private elements:ElementModel[] = [
       new ElementModel(DropdownComponent,''),
       new ElementModel(ButtonComponent,''),
       new ElementModel(TextfieldComponent,''),
       new ElementModel(TextComponent,''),
    ];

    getElements(){
        return this.elements.slice();
    }
}