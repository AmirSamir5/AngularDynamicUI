import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { WidgetConfiguration } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';
import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-row-properties',
  templateUrl: './row-properties.component.html',
  styleUrls: ['./row-properties.component.css'],
})
export class RowPropertiesComponent implements OnInit {
  @Input() listElementModel?: ElementModel;
  @Input() index: number = 0;
  item?: ListModel;
  listIndex: number = 0;
  justifyArr = AppConstants.JUSTIFY_LIST;

  constructor(
    private elementService: ElementService,
    private listService: ListElementService
  ) {}

  ngOnInit(): void {
    this.listService.onElementClickEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.item = itemList;
        this.listIndex = index;
      }
    );
  }

  onExpandedChange(){
    this.item!.style.flex = undefined;
    this.listElementModel!.json.style.justify = '';
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFlexValue(event) {
    this.item!.style.expanded = false;
    this.item!.style.flex = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getRowSpan(event) {
    this.item!.style.rowspan = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getBackgroundColorValue(event) {
    this.item!.style.backgroundColor = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getColorValue(event) {
    this.item!.style.color = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFontSizeValue(event) {
    this.item!.style.fontSize = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFontFamilyValue(event) {
    this.item!.style.fontFamily = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  getFontWeightValue(event) {
    this.item!.style.fontWeight = event.target.value;
    this.listService.onEditElementEvent.emit({
      make: this.item!,
      name: this.listIndex,
    });
  }

  onSelectRowJustify(){
    this.listService.onSetRowStyle(this.listElementModel!.json.style);
  }

  onSelectText() {
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push({
      type: 'Text',
      style: new StyleModel({
        rowspan: 1,
        backgroundColor: 'lightblue',
        color: 'white',
        fontFamily: 'Robota-Regular',
        fontSize: 12,
        fontWeight: 'normal',
      }),
    });
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectButton() {
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push({
      type: 'Button',
      style: new StyleModel({
        rowspan: 1,
        backgroundColor: 'lightgreen',
        color: 'black',
        fontFamily: 'Robota-Regular',
        fontSize: 12,
        fontWeight: 'normal',
      }),
    });
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectEmpty() {
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push({
      type: 'Empty',
      style: new StyleModel({
        rowspan: 1,
        backgroundColor: 'white',
      }),
    });
    this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.listElementModel!.json.widget_type = AppConstants.WIDGET_ROW;
    // this.listElementModel!.json.widgetConfiguration!.listConfiguration = 'Add List Configration Object';
  }

  checkConfiguration() {
    if (this.listElementModel!.json.widgetConfiguration === undefined) {
      this.listElementModel!.json.widgetConfiguration =
        new WidgetConfiguration();
      this.listElementModel!.json.widgetConfiguration!.listConfiguration = [];
    }
  }
}
