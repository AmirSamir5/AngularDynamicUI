export class JSONModel {
    validations?: Validations
    fieldTitle?: string
    linked_fields?: string[]
    groupName?: string
    groupId?: number
    fieldId?: number
    hint?: string
    widgetId?: number
    widgetConfiguration?: WidgetConfiguration
    widget_type?: string
  }
  
  export interface Validations {
    parameterFormat?: string
    isUnique?: number
    parameterDefaultValue?: string
    parameterDataType?: number
    isMandatory?: number
    maxLength?: string
    maxValue?: string
    minLength?: string
    minValue?: string
    parameterName?: string
    parameterId?: number
    parameterOrder?: number
    valueList?: string
  }
  
  export interface WidgetConfiguration {
    valueType?: string
    formRendering?: string
    lookupListKey?: string
    lookupIdKey?: string
    paymentMethodCode?: string
    parentDropDwonId?: string  
    dropDownConfiguration?: DropDownConfiguration
    fieldConditions?: FieldCondition[]
  }
  
  export interface DropDownConfiguration {
    lookupListKey?: string
    lookupIdKey?: string
    lookupTextKey?: string
    filterByParentIdKey?: string
  }
  
  export interface FieldCondition {
    parentValue?: string
    show?: boolean
  }
  