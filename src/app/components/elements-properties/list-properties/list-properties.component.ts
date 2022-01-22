import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { StyleModel } from 'src/app/models/style.model';
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

  constructor(
    private elementService: ElementService,
  ) {}

  ngOnInit(): void {
  }

  onAddRow() {
    this.checkConfiguration();
    this.listElementModel!.widgetConfiguration?.listConfiguration?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_ROW,
        name:'Row',
        style: new StyleModel({
          flex: 6,
          rowspan: 1,
          backgroundColor: 'white',
        }),
      }));
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.listElementModel!.widget_type = AppConstants.WIDGET_LIST;
  }

  checkConfiguration() {
    if (this.listElementModel!.widgetConfiguration === undefined) {
      this.listElementModel!.widgetConfiguration =
        new WidgetConfiguration();
      this.listElementModel!.widgetConfiguration!.listConfiguration = [];
    }
  }
}
