import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { BorderRadiusModel, BoxDecoration, EdgeInsetsModel, StyleModel } from 'src/app/models/style.model';
import { ClickableConfiguration, DestinationScreenLookup, WidgetConfiguration, WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-column-properties',
  templateUrl: './column-properties.component.html',
  styleUrls: ['./column-properties.component.css']
})
export class ColumnPropertiesComponent implements OnInit,OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    this.columnElementModel!.child = { ...this.columnElementModel!.child! };
    this.columnElementModel!.child!.cell = {
      ...this.columnElementModel!.child!.cell!,
    };
    this.columnElementModel!.child!.cell!.child = {
      ...this.columnElementModel!.child!.cell!.child!,
    };
    this.columnElementModel!.child!.cell!.child!.children =
      this.columnElementModel!.child!.cell!.child!.children!.slice();
    this.columnElementModel!.child!.widgetConfiguration = {
      ...this.columnElementModel!.child!.widgetConfiguration,
    };
  }

  onExpandedChange() {
    (this.selectedElement!.child ?? this.selectedElement)!.style.flex =
      undefined;
    (this.selectedElement!.child ??
      this.selectedElement)!.style.mainAxisAlignment = '';
  }

  onClickablChange() {
    this.isClickable = !this.isClickable;
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

    this.selectedElement!.style.decoration!.borderRadius = new BorderRadiusModel({
      topLeft: +radius,
      topRight: +radius,
      bottomLeft: +radius,
      bottomRight: +radius,
    });
  }

  getRowSpan(event) {
    (this.selectedElement!.child ?? this.selectedElement)!.style.rowspan =
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
    if(this.columnElementModel!.child!.style.rowspan === undefined){
      this.columnElementModel!.child!.style.rowspan = 1;
    }else{
      this.columnElementModel!.child!.style.rowspan += 1;
    }
    var widgetConfig = new WidgetConfiguration();
    widgetConfig.clickableConfiguration = new ClickableConfiguration({
      type: '',
      passedKeys: [],
      destination_screen_lookUp: new DestinationScreenLookup({
        name: '',
        type: '',
      }),
    });
    this.columnElementModel!.child!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        style: new StyleModel({
          decoration: new BoxDecoration({ color: 4294967295 }),
        }),
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_TEXT,
          name: 'Text',
          style: new StyleModel({
            rowspan: 1,
            color: 4278190080,
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
    if(this.columnElementModel!.child!.style.rowspan === undefined){
      this.columnElementModel!.child!.style.rowspan = 1;
    }else{
      this.columnElementModel!.child!.style.rowspan += 1;
    }
    var widgetConfig = new WidgetConfiguration();
    widgetConfig.clickableConfiguration = new ClickableConfiguration({
      type: '',
      passedKeys: [],
      destination_screen_lookUp: new DestinationScreenLookup({
        name: '',
        type: '',
      }),
    });
    this.columnElementModel!.child!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        style: new StyleModel({
          decoration: new BoxDecoration({ color: 4293467747 }),
        }),
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_BUTTON,
          name: 'Button',
          style: new StyleModel({
            rowspan: 1,
            color: 4294967295,
            fontFamily: 'Robota-Regular',
            fontSize: 12,
            fontWeight: 'normal',
          }),
          widgetConfiguration: widgetConfig,
        }),
      })
    );
  }

  onSelectImage() {
    this.checkConfiguration();
    if(this.columnElementModel!.child!.style.rowspan === undefined){
      this.columnElementModel!.child!.style.rowspan = 1;
    }else{
      this.columnElementModel!.child!.style.rowspan += 1;
    }
    var widgetConfig = new WidgetConfiguration();
    widgetConfig.clickableConfiguration = new ClickableConfiguration({
      type: '',
      passedKeys: [],
      destination_screen_lookUp: new DestinationScreenLookup({
        name: '',
        type: '',
      }),
    });
    this.columnElementModel!.child!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        style: new StyleModel({
          decoration: new BoxDecoration({ color: 4294940672 }),
        }),
        child: new WidgetModel({
          widget_type: AppConstants.WIDGET_IMAGE,
          name: 'Image',
          style: new StyleModel({
            rowspan: 1,
            color: 4294967295,
            fontFamily: 'Robota-Regular',
            fontSize: 12,
            fontWeight: 'normal',
          }),
          widgetConfiguration: widgetConfig,
        }),
      })
    );
  }

  onSubmit() {
    this.checkConfiguration();
    this.columnElementModel!.child!.widget_type = AppConstants.WIDGET_COLUMN;
  }

  checkConfiguration() {
    if (this.columnElementModel!.child!.children === undefined) {
      this.columnElementModel!.child!.children = [];
    }
  }

  onBackgroundChange(event) {
    var val = event.target.value.replace('#', '0xFF');
    console.log(val, parseInt(val, 16));
    this.selectedElement!.style.decoration!.color = parseInt(val, 16);
  }

  onColorChange(event) {
    var val = event.target.value.replace('#', '0xFF');
    console.log(val, parseInt(val, 16));
    this.selectedElement!.child!.style.color = parseInt(val, 16);
  }
}
