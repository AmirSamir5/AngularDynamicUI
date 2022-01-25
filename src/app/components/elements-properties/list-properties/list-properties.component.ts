import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { EdgeInsetsModel, StyleModel } from 'src/app/models/style.model';
import { WidgetConfiguration, WidgetModel } from 'src/app/models/widget.model';
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

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {}

  onAddRow() {
    this.checkConfiguration();
    this.listElementModel!.cell!.child!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_ROW,
        name: 'Row',
        style: new StyleModel({
          flex: 6,
          rowspan: 1,
          padding: new EdgeInsetsModel({}),
          margin: new EdgeInsetsModel({}),
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
    var paddings = event.target.value.split(' ');
    if (this.listElementModel!.cell!.style.padding === undefined)
      this.listElementModel!.cell!.style.padding = new EdgeInsetsModel({});
    this.listElementModel!.cell!.style.padding!.top = parseFloat(paddings[0]);
    this.listElementModel!.cell!.style.padding!.bottom = parseFloat(
      paddings[1]
    );
    this.listElementModel!.cell!.style.padding!.left = parseFloat(paddings[2]);
    this.listElementModel!.cell!.style.padding!.right = parseFloat(paddings[3]);
  }

  onMargin(event) {
    var margins = event.target.value.split(' ');
    if (this.listElementModel!.cell!.style.margin === undefined)
      this.listElementModel!.cell!.style.margin = new EdgeInsetsModel({});
    this.listElementModel!.cell!.style.margin!.top = parseFloat(margins[0]);
    this.listElementModel!.cell!.style.margin!.bottom = parseFloat(margins[1]);
    this.listElementModel!.cell!.style.margin!.left = parseFloat(margins[2]);
    this.listElementModel!.cell!.style.margin!.right = parseFloat(margins[3]);
  }
}
