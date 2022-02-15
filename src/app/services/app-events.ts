import { EventEmitter } from "@angular/core";
import { ScreenModel } from "../models/screen.model";
import { WidgetModel } from "../models/widget.model";

export class AppEvents{
    static openNavEvent = new EventEmitter();
    static closeNavEvent = new EventEmitter();
    static EditElementEvent = new EventEmitter<{ make?: WidgetModel; name?: number }>();
    static EditRowElementEvent = new EventEmitter<{ make: WidgetModel; name: number }>();
    static RemoveRowElementEvent = new EventEmitter();
    static onScreenSelectEvent = new EventEmitter<ScreenModel>();
    static selectedElementsChangedEvent = new EventEmitter<WidgetModel[]>();
    static clearPropertiesEvent = new EventEmitter();
    static onRemoveElementEvent = new EventEmitter<{
        make: WidgetModel[];
        name: WidgetModel;
    }>();
}