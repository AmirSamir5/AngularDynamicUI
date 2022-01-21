import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { WidgetConfiguration, WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css'],
})
export class ListPropertiesComponent implements OnInit {
  @Input() listElementModel?: ElementModel;
  @Input() index: number = 0;
  item?: ElementModel;
  listIndex: number = 0;

  constructor(
    private elementService: ElementService,
  ) {}

  ngOnInit(): void {
  }

  onAddRow() {
    this.checkConfiguration();
    this.listElementModel!.widget.widgetConfiguration?.listConfiguration?.push(
      new ElementModel(
        'Row',{
        widget_type: '',
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
    this.listElementModel!.widget.widget_type = AppConstants.WIDGET_LIST;
  }

  checkConfiguration() {
    if (this.listElementModel!.widget.widgetConfiguration === undefined) {
      this.listElementModel!.widget.widgetConfiguration =
        new WidgetConfiguration();
      this.listElementModel!.widget.widgetConfiguration!.listConfiguration = [];
    }
  }
}
