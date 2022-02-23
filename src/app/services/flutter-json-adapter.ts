import { AppConstants } from '../constants/constants';
import { ScreenModel } from '../models/screen.model';
import { WidgetModel } from '../models/widget.model';
import { HelpersService } from './helpers.service';

export class FlutterJsonAdapter {
  generateFlutterJSON(screenModel: ScreenModel): string {
    var flutterScreen = new ScreenModel({
      screen_name: screenModel.screen_name,
      screen_id: screenModel.screen_id,
    });

    if (screenModel.screenPages.isScrollable) {
      flutterScreen.screenPages.fields.push(
        new WidgetModel({
          widget_type: AppConstants.WIDGET_SCROLLVIEW,
          child: new WidgetModel({
            widget_type: AppConstants.WIDGET_COLUMN,
            children: [],
          }),
        })
      );
    } else {
      flutterScreen.screenPages.fields.push(
        new WidgetModel({
          widget_type: AppConstants.WIDGET_CONTAINER,
          child: new WidgetModel({
            widget_type: AppConstants.WIDGET_COLUMN,
            children: [],
          }),
        })
      );
    }

    screenModel.screenPages.fields.forEach((element, parentIndex) => {
      if (
        element.widget_type === AppConstants.WIDGET_COLUMN ||
        element.widget_type === AppConstants.WIDGET_ROW
      ) {
        flutterScreen.screenPages.fields[0].child!.children![parentIndex] = HelpersService.deepCopy(element);
        flutterScreen.screenPages.fields[0].child!.children![parentIndex].children = [];

        element.children!.forEach((child, childIndex) => {
          if (child.style.expanded) {
            flutterScreen.screenPages.fields[0].child!.children![
              parentIndex
            ].children![childIndex] = new WidgetModel({
              widget_type: AppConstants.WIDGET_EXPANDED,
              child: new WidgetModel({
                widget_type: AppConstants.WIDGET_CONTAINER,
                child: child,
              }),
            });
          } else {
            flutterScreen.screenPages.fields[0].child!.children![
              parentIndex
            ].children![childIndex] = new WidgetModel({
              widget_type: AppConstants.WIDGET_CONTAINER,
              child: child,
            });
          }
          if (child.widget_type === AppConstants.WIDGET_COLUMN){
              
          }
        });
      } else {
        flutterScreen.screenPages.fields[0].child!.children![parentIndex] =
          new WidgetModel({
            widget_type: AppConstants.WIDGET_CONTAINER,
            child: element,
          });
      }
    });
    return '';
  }

  checkChildren(element: WidgetModel): boolean {
    if (element.children !== null) {
      return true;
    }
    return false;
  }
}
