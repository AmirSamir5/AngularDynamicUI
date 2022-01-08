import { ElementModel } from './element.model';
import { JSONModel } from './json.model';

export class DropdownElementModel extends ElementModel {
  public lookupListKey: string;
  public isMandetory: boolean;
  constructor(
    type: string,
    title: string,
    hint: string,
    lookupListKey: string,
    isMandetory: boolean,
    json: JSONModel
  ) {
    super(type, title, hint, json);
    this.lookupListKey = lookupListKey;
    this.isMandetory = isMandetory;
  }
}
