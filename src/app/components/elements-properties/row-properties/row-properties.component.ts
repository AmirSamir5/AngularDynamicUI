import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { WidgetConfiguration, WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-row-properties',
  templateUrl: './row-properties.component.html',
  styleUrls: ['./row-properties.component.css'],
})
export class RowPropertiesComponent implements OnInit {
  @Input() rowElementModel?: WidgetModel;
  @Input() index: number = 0;
  selectedElement?:WidgetModel;
  listIndex: number = 0;
  justifyArr = AppConstants.JUSTIFY_LIST;

  constructor(
    private elementService: ElementService,
  ) {}

  ngOnInit(): void {
    this.elementService.EditRowElementEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.rowElementModel!.widgetConfiguration!.rowConfiguration![index] = itemList;
        this.listIndex = index;
        this.selectedElement = itemList;
      }
    );
    this.elementService.RemoveRowElementEvent.subscribe(()=>{
      this.selectedElement = undefined;
    })
  }

  onExpandedChange() {
    this.selectedElement!.style.flex = undefined;
    this.rowElementModel!.style.justify = '';
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFlexValue(event) {
    this.selectedElement!.style.expanded = false;
    this.selectedElement!.style.flex = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getRowSpan(event) {
    this.selectedElement!.style.rowspan = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getBackgroundColorValue(event) {
    this.selectedElement!.style.backgroundColor = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getColorValue(event) {
    this.selectedElement!.style.color = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFontSizeValue(event) {
    this.selectedElement!.style.fontSize = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFontFamilyValue(event) {
    this.selectedElement!.style.fontFamily = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFontWeightValue(event) {
    this.selectedElement!.style.fontWeight = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  onSelectRowJustify() {
    // this.listService.onSetRowStyle(this.rowElementModel!.widget.style);
  }

  onSelectText() {
    this.checkConfiguration();
    this.rowElementModel!.widgetConfiguration?.rowConfiguration?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_TEXT,
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'lightblue',
          color: 'white',
          fontFamily: 'Robota-Regular',
          fontSize: 12,
          fontWeight: 'normal',
        }),
      }));
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectButton() {
    this.checkConfiguration();
    this.rowElementModel!.widgetConfiguration?.rowConfiguration?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_BUTTON,
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'lightgreen',
          color: 'black',
          fontFamily: 'Robota-Regular',
          fontSize: 12,
          fontWeight: 'normal',
        }),
    }));
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectEmpty() {
    this.checkConfiguration();
    this.rowElementModel!.widgetConfiguration?.rowConfiguration?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
      style: new StyleModel({
        rowspan: 1,
        backgroundColor: 'white',
      }),
    }));
      
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.rowElementModel!.widget_type = AppConstants.WIDGET_ROW;
    // this.listElementModel!.widget.widgetConfiguration!.listConfiguration = 'Add List Configration Object';
  }

  checkConfiguration() {
    if (this.rowElementModel!.widgetConfiguration === undefined) {
      this.rowElementModel!.widgetConfiguration =
        new WidgetConfiguration();
      this.rowElementModel!.widgetConfiguration!.rowConfiguration = [];
    }
  }
}
