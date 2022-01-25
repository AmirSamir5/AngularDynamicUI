import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { EdgeInsetsModel, StyleModel } from 'src/app/models/style.model';
import {
  ClickableConfiguration,
  DestinationScreenLookup,
  WidgetConfiguration,
  WidgetModel,
} from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-row-properties',
  templateUrl: './row-properties.component.html',
  styleUrls: ['./row-properties.component.css'],
})
export class RowPropertiesComponent implements OnInit {
  @Input() rowElementModel?: WidgetModel;
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

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.EditRowElementEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.selectedElement = itemList;
      }
    );
    this.elementService.RemoveRowElementEvent.subscribe(() => {
      this.selectedElement = undefined;
    });
  }

  onExpandedChange() {
    (this.selectedElement!.child ?? this.selectedElement)!.style.flex =
      undefined;
    (this.selectedElement!.child ??
      this.selectedElement)!.style.mainAxisAlignment = '';
  }

  onClickablChange() {
    if (!this.isClickable) {
      this.selectedElement!.child!.widgetConfiguration!.clickableConfiguration!.type =
        '';
      this.selectedElement!.child!.widgetConfiguration!.clickableConfiguration!.passedKeys =
        [];
      this.selectedElement!.child!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.name =
        '';
      this.selectedElement!.child!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.type =
        '';
    }
  }

  onPassedKeys(event) {
    console.log(event.target.value);
    this.selectedElement!.child!.widgetConfiguration!.clickableConfiguration!.passedKeys =
      event.target.value.split(' ');
  }

  getFlexValue(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.expanded =
      false;
    (this.selectedElement!.child ??
      this.selectedElement)!.style.mainAxisAlignment = event.target.value;
  }

  getMarginValue(event) {
    var margins = event.target.value.split(' ');
    this.selectedElement!.style.margin = new EdgeInsetsModel({
      top: margins[0],
      left: margins[2],
      right: margins[3],
      bottom: margins[1],
    });
  }

  getPaddingValue(event) {
    var paddings = event.target.value.split(' ');
    this.selectedElement!.style.padding = new EdgeInsetsModel({
      top: paddings[0],
      left: paddings[2],
      right: paddings[3],
      bottom: paddings[1],
    });
  }

  getRowSpan(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.rowspan =
      event.target.value;
  }

  getBackgroundColorValue(event) {
    (this.selectedElement!.child ??
      this.selectedElement)!.style.backgroundColor = event.target.value;
  }

  getColorValue(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.color =
      event.target.value;
  }

  getFontSizeValue(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.fontSize =
      event.target.value;
  }

  getFontFamilyValue(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.fontFamily =
      event.target.value;
  }

  getFontWeightValue(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.fontWeight =
      event.target.value;
  }

  onSelectText() {
    this.checkConfiguration();
    var widgetConfig = new WidgetConfiguration();
    widgetConfig.clickableConfiguration = new ClickableConfiguration({
      type: '',
      passedKeys: [],
      destination_screen_lookUp: new DestinationScreenLookup({
        name: '',
        type: '',
      }),
    });
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        style: new StyleModel({
          backgroundColor: 'white',
        }),
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_TEXT,
          name: 'Text',
          style: new StyleModel({
            rowspan: 1,
            color: 'black',
            fontFamily: 'Robota-Regular',
            fontSize: 12,
            fontWeight: 'normal',
          }),
          widgetConfiguration: widgetConfig,
        }),
      })
    );
  }

  onSelectButton() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        style: new StyleModel({
          backgroundColor: 'deeppink',
        }),
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_BUTTON,
          name: 'Button',
          style: new StyleModel({
            rowspan: 1,
            color: 'white',
            fontFamily: 'Robota-Regular',
            fontSize: 12,
            fontWeight: 'normal',
          }),
        }),
      })
    );
  }

  onSelectIcon() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        style: new StyleModel({
          backgroundColor: 'orange',
        }),
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_ICON,
          name: 'Icon',
          style: new StyleModel({
            rowspan: 1,
            color: 'white',
            fontFamily: 'Robota-Regular',
            fontSize: 12,
            fontWeight: 'normal',
          }),
        }),
      })
    );
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectEmpty() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        name: 'Empty',
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'white',
        }),
      })
    );
  }

  onSubmit() {
    this.checkConfiguration();
    this.rowElementModel!.widget_type = AppConstants.WIDGET_ROW;
  }

  checkConfiguration() {
    if (this.rowElementModel!.children === undefined) {
      this.rowElementModel!.children = [];
    }
  }
}
