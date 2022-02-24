import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/constants';
import { ScreenModel } from '../models/screen.model';
import { StyleModel } from '../models/style.model';
import { WidgetModel } from '../models/widget.model';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  static deepCopy(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepCopy(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

  static formatDocument(screen: ScreenModel): ScreenModel {
    var formatedScreen: ScreenModel = new ScreenModel({
      screen_name: screen.screen_name,
      screen_id: screen.screen_id,
    });

    if (screen.screenPages.isScrollable) {
      formatedScreen.screenPages.fields.push(
        new WidgetModel({
          widget_type: AppConstants.WIDGET_SCROLLVIEW,
          children: this.deepCopy(screen.screenPages.fields),
        })
      );
    } else {
      formatedScreen.screenPages.fields.push(
        new WidgetModel({
          widget_type: AppConstants.WIDGET_CONTAINER,
          child: new WidgetModel({
            widget_type: AppConstants.WIDGET_COLUMN,
            children: this.deepCopy(screen.screenPages.fields),
          }),
        })
      );
    }
    formatedScreen.screenPages.fields.forEach((child, index) => {
      formatedScreen.screenPages.fields[index] = this.formatElement(child);
    });

    return formatedScreen;
    // return JSON.stringify(formatedScreen);
  }

  static formatElement(widget: WidgetModel): WidgetModel {
    var formatedWidget: WidgetModel = this.deepCopy(widget);
    const expanded = formatedWidget.style.expanded;
    formatedWidget.style.expanded = undefined;
    const style: StyleModel = formatedWidget.style;
    //  Check Children
    if (
      widget.children !== null &&
      widget.children !== undefined &&
      widget.children.length > 0
    ) {
      widget.children.forEach((child, index) => {
        formatedWidget.children![index] = this.formatElement(child);
      });
    }

    //  Check Container Properties
    if (style) {
      if (
        style.backgroundColor ||
        style.padding ||
        style.margin ||
        style.border ||
        style.borderRadius
      ) {
        formatedWidget = new WidgetModel({
          widget_type: AppConstants.WIDGET_CONTAINER,
          child: formatedWidget,
          style: style,
        });
      }
    }

    //  Check Expanded
    if (expanded) {
      formatedWidget = new WidgetModel({
        widget_type: AppConstants.WIDGET_EXPANDED,
        child: formatedWidget,
      });
    }

    return formatedWidget;
  }
}
