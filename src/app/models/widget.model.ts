import { ListModel } from './list.model';
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
  parameterDefaultValue?: string;
  parameterName?: string;
  style?: StyleModel;
}

export class Validations {
  parameterFormat?: string;
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
  listConfiguration?: ListModel[];
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
