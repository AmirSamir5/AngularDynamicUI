import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { WidgetConfiguration } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';
import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css'],
})
export class ListPropertiesComponent implements OnInit {
  @Input() listElementModel?: ElementModel;
  @Input() index: number = 0;
  flex?: number;
  span?: number;
  backgroundColor?: string;
  item?: ListModel;
  listIndex: number = 0;
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: number;
  color?: string;

  constructor(
    private elementService: ElementService,
    private listService: ListElementService
  ) {}

  ngOnInit(): void {
    this.listService.onElementClickEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.item = itemList;
        this.listIndex = index;
        this.flex = itemList.flex;
        this.span = itemList.rowspan;
        this.backgroundColor = itemList.backgroundColor;
        this.color = 'white';
        this.fontSize = 12;
        this.fontWeight = 'normal';
        this.fontFamily = 'Robota-Regular';
      }
    );
  }

  getFlexValue(event) {
    this.item!.flex = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getRowSpan(event) {
    this.item!.rowspan = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getBackgroundColorValue(event) {
    this.item!.backgroundColor = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getColorValue(event) {
    this.item!.color = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFontSizeValue(event) {
    this.item!.fontSize = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFontFamilyValue(event) {
    this.item!.fontFamily = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFontWeightValue(event) {
    this.item!.fontWeight = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  onSelectText() {
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push({
      type: 'Text',
      flex: 2,
      rowspan: 1,
      backgroundColor: 'lightblue',
      color: 'white',
      fontFamily: 'Robota-Regular',
      fontSize: 12,
      fontWeight: 'normal',
    });
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectButton() {
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push({
      type: 'Button',
      flex: 2,
      rowspan: 1,
      backgroundColor: 'lightgreen',
      color: 'black',
      fontFamily: 'Robota-Regular',
      fontSize: 12,
      fontWeight: 'normal',
    });
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectEmpty() {
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push({
      type: 'Empty',
      flex: 2,
      rowspan: 1,
      backgroundColor: 'white',
    });
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.listElementModel!.json.widget_type = AppConstants.WIDGET_LIST;
    // this.listElementModel!.json.widgetConfiguration!.listConfiguration = 'Add List Configration Object';
  }

  checkConfiguration() {
    if (this.listElementModel!.json.widgetConfiguration === undefined) {
      this.listElementModel!.json.widgetConfiguration =
        new WidgetConfiguration();
      this.listElementModel!.json.widgetConfiguration!.listConfiguration = [];
    } else {
      var element =
        this.listElementModel?.json.widgetConfiguration.listConfiguration![
          this.listIndex
        ];
      this.fontFamily = element!.fontFamily;
      this.fontSize = element!.fontSize;
      this.fontWeight = element!.fontWeight;
      this.color = element!.color;
      this.backgroundColor = element!.backgroundColor;
      this.flex = element!.flex;
      this.span = element!.rowspan;
    }
  }
}
