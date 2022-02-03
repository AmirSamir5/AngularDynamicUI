import { EventEmitter } from "@angular/core";
import { JSONModel } from "../models/json.model";
import { WidgetModel } from "../models/widget.model";

export class AppEvents{
    static EditElementEvent = new EventEmitter<{ make?: WidgetModel; name?: number }>();
    static EditRowElementEvent = new EventEmitter<{ make: WidgetModel; name: number }>();
    static RemoveRowElementEvent = new EventEmitter();
    static onScreenSelectEvent = new EventEmitter<JSONModel>();
    static changeAppbarEvent = new EventEmitter<string>();
    static selectedElementsChangedEvent = new EventEmitter<WidgetModel[]>();
    static clearPropertiesEvent = new EventEmitter();
    static onRemoveElementEvent = new EventEmitter<{
        make: WidgetModel[];
        name: WidgetModel;
    }>();
}