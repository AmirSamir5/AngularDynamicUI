import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css'],
})
export class ListPropertiesComponent implements OnInit {
  @Input() listElementModel?: WidgetModel;
  @Input() index: number = 0;
  item?: WidgetModel;
  listIndex: number = 0;
  isClickable: boolean = false;
  clickablesArr = AppConstants.CLICKABLE_CONFIGURATION;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    if (this.listElementModel!.cell!.widgetConfiguration === undefined) {
      this.listElementModel!.cell!.widgetConfiguration =
        new WidgetConfiguration();
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration =
        new ClickableConfiguration({
          type: '',
          passedKeys: [],
          destination_screen_lookUp: new DestinationScreenLookup({
            type: '',
            name: '',
          }),
        });
    }
  }

  onAddRow() {
    this.checkConfiguration();
    this.listElementModel!.cell!.child!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_ROW,
        name: 'Row',
        style: new StyleModel({
          flex: 6,
          rowspan: 1,
          backgroundColor: 'white',
        }),
      })
    );
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.listElementModel!.widget_type = AppConstants.WIDGET_LIST;
  }

  checkConfiguration() {
    if (this.listElementModel!.cell!.child!.children === undefined) {
      this.listElementModel!.cell!.child!.children = [];
    }
  }

  onPadding(event) {
    var paddings = event.target.value;
    if (this.listElementModel!.cell!.style.padding === undefined)
      this.listElementModel!.cell!.style.padding = new EdgeInsetsModel({});
    this.listElementModel!.cell!.style.padding!.top = +paddings;
    this.listElementModel!.cell!.style.padding!.bottom = +paddings;
    this.listElementModel!.cell!.style.padding!.left = +paddings;
    this.listElementModel!.cell!.style.padding!.right = +paddings;
  }

  onMargin(event) {
    var margins = event.target.value;
    if (this.listElementModel!.cell!.style.margin === undefined)
      this.listElementModel!.cell!.style.margin = new EdgeInsetsModel({});
    this.listElementModel!.cell!.style.margin!.top = +margins;
    this.listElementModel!.cell!.style.margin!.bottom = +margins;
    this.listElementModel!.cell!.style.margin!.left = +margins;
    this.listElementModel!.cell!.style.margin!.right = +margins;
  }

  onClickablChange() {
    if (!this.isClickable) {
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.type =
        '';
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.passedKeys =
        [];
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.name =
        '';
      this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.type =
        '';
    }
  }

  onPassedKeys(event) {
    console.log(event.target.value);
    this.listElementModel!.cell!.widgetConfiguration!.clickableConfiguration!.passedKeys =
      event.target.value.split(' ');
  }
}
