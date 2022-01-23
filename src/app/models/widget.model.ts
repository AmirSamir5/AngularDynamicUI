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
  name?: string;
  style: StyleModel;
  dataArray?: string;
  dataMapId?: string;
  dataIdInMap?: string;
  parameterDefaultValue?: string;
  parameterName?: string;
  parameterOrder?: string;
  child?: WidgetModel;
  children?: WidgetModel[];
  cell?: WidgetModel;

  constructor({
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
    cell,
    child,
    children,
  }: {
    validations?: Validations;
    fieldTitle?: string;
    linked_fields?: string[];
    groupName?: string;
    groupId?: number;
    fieldId?: number;
    hint?: string;
    widgetId?: number;
    widgetConfiguration?: WidgetConfiguration;
    widget_type?: string;
    name?: string;
    style?: StyleModel;
    dataArray?: string;
    cell?: WidgetModel;
    child?: WidgetModel;
    children?: WidgetModel[];
  }) {
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
    this.cell = cell;
    this.child = child;
    this.children = children;
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
  clickableConfiguration?: ClickableConfiguration;
}

export class ClickableConfiguration {
  type?: string;
  passedKeys?: string[];
  destination_screen_lookUp?: DestinationScreenLookup;
}

export class DestinationScreenLookup {
  name?: string;
  type?: string;
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
