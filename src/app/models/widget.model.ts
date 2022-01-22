import { StyleModel } from './style.model';

export class WidgetModel {
  public validations?: Validations;
  fieldTitle?: string;
  linked_fields?: string[];
  groupName?: string;
  groupId?: number;
  fieldId?: number;
  hint?: string;
  widgetId?: number;
  widgetConfiguration?: WidgetConfiguration;
  widget_type?: string;
  name?:string;
  style: StyleModel;
  dataArray?: string;

  constructor(
    {
      validations,
      fieldTitle,
      linked_fields,
      groupName,
      groupId,
      fieldId,
      hint,
      widgetId,
      widgetConfiguration,
      widget_type,
      name,
      style,
      dataArray,
    }:
    {
      validations?: Validations,
      fieldTitle?: string,
      linked_fields?: string[],
      groupName?: string,
      groupId?: number,
      fieldId?: number,
      hint?: string,
      widgetId?: number,
      widgetConfiguration?: WidgetConfiguration,
      widget_type?: string,
      name?:string,
      style?:StyleModel,
      dataArray?:string
    }
    ){
        this.validations = validations;
        this.fieldTitle = fieldTitle;
        this.linked_fields = linked_fields;
        this.groupName = groupName;
        this.groupId = groupId;
        this.fieldId = fieldId;
        this.hint = hint;
        this.widgetId = widgetId;
        this.widgetConfiguration = widgetConfiguration;
        this.widget_type = widget_type;
        this.name = name;
        this.style = style ?? new StyleModel({});
        this.dataArray = dataArray;
    }
}

export class Validations {
  parameterFormat?: string;
  parameterDefaultValue?: string;
  parameterName?: string;
  isUnique?: number;
  parameterDataType?: number;
  isMandatory?: number;
  maxLength?: string;
  maxValue?: string;
  minLength?: string;
  minValue?: string;
  parameterId?: number;
  parameterOrder?: number;
  valueList?: string;
  regex?: string;
  error_msg?: string;
}

export class WidgetConfiguration {
  valueType?: string;
  formRendering?: string;
  lookupListKey?: string;
  lookupIdKey?: string;
  paymentMethodCode?: string;
  parentDropDwonId?: string;
  dropDownConfiguration?: DropDownConfiguration;
  fieldConditions?: FieldCondition[];
  listConfiguration?: WidgetModel[];
  rowConfiguration?: WidgetModel[];
}

export class DropDownConfiguration {
  lookupListKey?: string;
  lookupIdKey?: string;
  lookupTextKey?: string;
  filterByParentIdKey?: string;
}

export interface FieldCondition {
  parentValue?: string;
  show?: boolean;
}
