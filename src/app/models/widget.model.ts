import { StyleModel } from './style.model';

export class WidgetModel {
  public validations?: Validations;
  fieldTitle?: string;
  linked_fields?: string[];
  groupName?: string;
  groupId?: number;
  fieldId?: number;
  hint?: string;
  expanded?: boolean;
  widgetId?: number;
  widgetConfiguration?: WidgetConfiguration;
  widget_type?: string;
  textDisplayed?: string;
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
  cellProtoType?: string;
  apiCode?: string;

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
  lookupTextKey?: string;
  paymentMethodCode?: string;
  parentDropDwonId?: string;
  dropDownConfiguration?: DropDownConfiguration;
  filterByParentIdKey?: string;
  fieldConditions?: FieldCondition[];
  listConfiguration?: WidgetModel[];
  rowConfiguration?: WidgetModel[];
  clickableConfiguration?: ClickableConfiguration;
  direction?: string;
  showedFields?: any[];
  DateFormat?: string;
}

export class ClickableConfiguration {
  isClickable?: boolean = false;
  type?: string;
  passedKeys?: string[];
  apiCode?: string;
  destination_screen_lookUp?: DestinationScreenLookup;
  constructor({
    isClickable,
    type,
    passedKeys,
    destination_screen_lookUp,
  }: {
    isClickable?: boolean,
    type?: string;
    passedKeys?: string[];
    destination_screen_lookUp?: DestinationScreenLookup;
  }) {
    this.isClickable = isClickable;
    this.type = type;
    this.passedKeys = passedKeys;
    this.destination_screen_lookUp = destination_screen_lookUp;
  }
}

export class LoadDataConfiguration {
  passedKeys?: string[];
  type?: string;
  lookUpName?: string;
  apiCode?: string;
  constructor({
    passedKeys,
    type,
    lookUpName,
    apiCode,
  }: {
    passedKeys: string[];
    type: string;
    lookUpName: string;
    apiCode: string;
  }) {
    this.passedKeys = passedKeys;
    this.type = type;
    this.lookUpName = lookUpName;
    this.apiCode = apiCode;
  }
}

export class DestinationScreenLookup {
  name?: string;
  type?: string;
  constructor({ name, type }: { name: string; type: string }) {
    this.name = name;
    this.type = type;
  }
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
