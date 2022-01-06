import { ElementModel } from './element.model';

export class InputFieldElementModel extends ElementModel {
  public isMandetory: boolean;
  public maxLength: number;
  public minLength: number;
  public regex: string;
  public errorMsg: string;
  public defaultValue: string;
  public parameterName: string;
  public parameterOrder: number;
  constructor(
    title: string,
    hintText: string,
    type: string,
    json: string,
    isMandetory: boolean,
    maxLength: number,
    minLength: number,
    regex: string,
    errorMsg: string,
    defaultValue: string,
    parameterName: string,
    parameterOrder: number
  ) {
    super(type, title, hintText, json);
    this.isMandetory = isMandetory;
    this.maxLength = maxLength;
    this.minLength = minLength;
    this.regex = regex;
    this.errorMsg = errorMsg;
    this.defaultValue = defaultValue;
    this.parameterName = parameterName;
    this.parameterOrder = parameterOrder;
  }
}
