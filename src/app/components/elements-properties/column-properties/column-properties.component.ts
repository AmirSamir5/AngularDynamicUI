import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import {
  BorderRadiusModel,
  EdgeInsetsModel,
  StyleModel,
} from 'src/app/models/style.model';
import {
  ClickableConfiguration,
  DestinationScreenLookup,
  WidgetConfiguration,
  WidgetModel,
} from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-column-properties',
  templateUrl: './column-properties.component.html',
  styleUrls: ['./column-properties.component.css'],
})
export class ColumnPropertiesComponent implements OnInit {
  @Input() columnElementModel?: WidgetModel;
  @Input() index: number = 0;
  selectedElement?: WidgetModel;
  listIndex: number = 0;
  isClickable: boolean = false;
  justifyArr = AppConstants.JUSTIFY_LIST;
  crossAxisArr = AppConstants.CROSS_AXIS_ALIGNMENT_LIST;
  mainAxisSizeArr = AppConstants.MAIN_AXIS_SIZE_LIST;
  textDirectionArr = AppConstants.TEXT_DIRECTION_LIST;
  varticalDirectionArr = AppConstants.VERTICAL_DIRECTION_LIST;
  clickablesArr = AppConstants.CLICKABLE_CONFIGURATION;
  iconArr = AppConstants.LIST_ICONS;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    AppEvents.EditRowElementEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.selectedElement = itemList;
      }
    );
    AppEvents.RemoveRowElementEvent.subscribe(() => {
      this.selectedElement = undefined;
    });
  }

  onExpandedChange() {
    this.selectedElement!.style.flex = undefined;
    this.selectedElement!.style.mainAxisAlignment = '';
  }

  onClickablChange() {
    if (this.selectedElement!.widgetConfiguration === undefined) {
      this.selectedElement!.widgetConfiguration = new WidgetConfiguration();
    }
    if (
      this.selectedElement!.widgetConfiguration.clickableConfiguration ===
      undefined
    ) {
      this.selectedElement!.widgetConfiguration.clickableConfiguration =
        new ClickableConfiguration({});
    }
    this.selectedElement!.widgetConfiguration!.clickableConfiguration!.isClickable =
      !this.selectedElement!.widgetConfiguration!.clickableConfiguration!
        .isClickable;
  }

  onPassedKeys(event) {
    console.log(event.target.value);
    this.selectedElement!.widgetConfiguration!.clickableConfiguration!.passedKeys =
      event.target.value.split(' ');
  }

  getFlexValue(event) {
    this.selectedElement!!.style.expanded = false;
    this.selectedElement!.style.mainAxisAlignment = event.target.value;
  }

  getMarginValue(event) {
    var margin = event.target.value;
    this.selectedElement!.style.margin = new EdgeInsetsModel({
      top: +margin,
      left: +margin,
      right: +margin,
      bottom: +margin,
    });
  }

  getPaddingValue(event) {
    var padding = event.target.value;

    this.selectedElement!.style.padding = new EdgeInsetsModel({
      top: +padding,
      left: +padding,
      right: +padding,
      bottom: +padding,
    });
  }

  getBorderRadiusValue(event) {
    var radius = event.target.value;

    this.selectedElement!.style.borderRadius = new BorderRadiusModel({
      topLeft: +radius,
      topRight: +radius,
      bottomLeft: +radius,
      bottomRight: +radius,
    });
  }

  onSelectText() {
    // this.checkConfiguration();
    if (this.columnElementModel!.style.rowspan === undefined) {
      this.columnElementModel!.style.rowspan = 1;
    } else {
      this.columnElementModel!.style.rowspan += 1;
    }
    this.columnElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_TEXT,
        name: 'Text',
      })
    );
  }

  onSelectButton() {
    if (this.columnElementModel!.style.rowspan === undefined) {
      this.columnElementModel!.style.rowspan = 1;
    } else {
      this.columnElementModel!.style.rowspan += 1;
    }
    this.columnElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_BUTTON,
        name: 'Button',
      })
    );
  }

  onSelectImage() {
    if (this.columnElementModel!.style.rowspan === undefined) {
      this.columnElementModel!.style.rowspan = 1;
    } else {
      this.columnElementModel!.style.rowspan += 1;
    }
    this.columnElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_IMAGE,
        name: 'Image',
      })
    );
  }

  onSelectIcon() {
    this.columnElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_ICON,
        name: 'Icon',
      })
    );
  }

  selectChange(event) {
    var val = event.value;
    this.iconArr.forEach((element) => {
      if (element.iconName === val) {
        this.selectedElement!.fontFamily = element.fontFamily;
        this.selectedElement!.codePoint = element.codePoint;
      }
    });
  }
}
