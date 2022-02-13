import {
  Component,
  OnInit,
  Input,
  OnChanges,
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
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css'],
})
export class ListPropertiesComponent implements OnInit, OnChanges {
  @Input() listElementModel?: WidgetModel;
  @Input() index: number = 0;
  item?: WidgetModel;
  listIndex: number = 0;
  clickablesArr = AppConstants.CLICKABLE_CONFIGURATION;
  listDirectionsArr = AppConstants.LIST_DIRECTION;

  constructor(private elementService: ElementService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.listElementModel!.cell!.widgetConfiguration === undefined){
      this.listElementModel!.cell!.widgetConfiguration = new WidgetConfiguration();
    }
    if(this.listElementModel!.widgetConfiguration === undefined){
      this.listElementModel!.widgetConfiguration = new WidgetConfiguration();
    }
  }

  ngOnInit(): void {
  }

  onAddRow() {
    this.listElementModel!.cell!.children!.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_ROW,
        name: 'Row',
        children: [],
      })
    );
  }

  onAddColumn() {
    this.listElementModel!.cell!.children!.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_COLUMN,
        name: 'Column',
        children: []
      })
    );
  }

  onPadding(event) {
    var paddings = event.target.value;
    if (this.listElementModel!.cell!.style.padding === undefined)
      this.listElementModel!.cell!.style.padding = new EdgeInsetsModel(
        {}
      );
    this.listElementModel!.cell!.style.padding!.top = +paddings;
    this.listElementModel!.cell!.style.padding!.bottom = +paddings;
    this.listElementModel!.cell!.style.padding!.left = +paddings;
    this.listElementModel!.cell!.style.padding!.right = +paddings;
  }

  onMargin(event) {
    var margins = event.target.value;
    if (this.listElementModel!.cell!.style.margin === undefined)
      this.listElementModel!.cell!.style.margin = new EdgeInsetsModel(
        {}
      );
    this.listElementModel!.cell!.style.margin!.top = +margins;
    this.listElementModel!.cell!.style.margin!.bottom = +margins;
    this.listElementModel!.cell!.style.margin!.left = +margins;
    this.listElementModel!.cell!.style.margin!.right = +margins;
  }

  onClickablChange() {
    if (
      !this.listElementModel!.cell!.widgetConfiguration!
        .clickableConfiguration!.isClickable
    ) {
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.apiCode =
        '';
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.name =
        '';
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.type =
        '';
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.passedKeys =
        [];
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.type =
        '';
    }
  }

  onPassedKeys(event) {
    console.log(event.target.value);
    this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.passedKeys =
      event.target.value.split(' ');
  }

  getBorderRadiusValue(event) {
    var radius = event.target.value;
    this.listElementModel!.cell!.style.borderRadius =
      new BorderRadiusModel({
        topLeft: +radius,
        topRight: +radius,
        bottomLeft: +radius,
        bottomRight: +radius,
      });
  }
}
