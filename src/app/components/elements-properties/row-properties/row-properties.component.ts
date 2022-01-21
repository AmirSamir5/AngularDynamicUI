import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
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
  @Input() rowElementModel?: ElementModel;
  @Input() index: number = 0;
  selectedElement?:ElementModel;
  listIndex: number = 0;
  justifyArr = AppConstants.JUSTIFY_LIST;

  constructor(
    private elementService: ElementService,
  ) {}

  ngOnInit(): void {
    this.elementService.EditRowElementEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.rowElementModel!.widget.widgetConfiguration!.rowConfiguration![index] = itemList;
        this.listIndex = index;
        this.selectedElement = itemList;
      }
    );
    this.elementService.RemoveRowElementEvent.subscribe(()=>{
      this.selectedElement = undefined;
    })
  }

  onExpandedChange() {
    this.selectedElement!.widget.style.flex = undefined;
    this.rowElementModel!.widget.style.justify = '';
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFlexValue(event) {
    this.selectedElement!.widget.style.expanded = false;
    this.selectedElement!.widget!.style.flex = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getRowSpan(event) {
    this.selectedElement!.widget.style.rowspan = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getBackgroundColorValue(event) {
    this.selectedElement!.widget!.style.backgroundColor = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getColorValue(event) {
    this.selectedElement!.widget.style.color = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFontSizeValue(event) {
    this.selectedElement!.widget.style.fontSize = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFontFamilyValue(event) {
    this.selectedElement!.widget.style.fontFamily = event.target.value;
    // this.listService.onEditElementEvent.emit({
    //   make: this.selectedElement!,
    //   name: this.listIndex,
    // });
  }

  getFontWeightValue(event) {
    this.selectedElement!.widget.style.fontWeight = event.target.value;
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
    this.rowElementModel!.widget.widgetConfiguration?.rowConfiguration?.push(
      new ElementModel('Text',{
        widget_type: 'Text',
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
    this.rowElementModel!.widget.widgetConfiguration?.rowConfiguration?.push(
      new ElementModel('Button',{
        widget_type: 'Button',

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
    this.rowElementModel!.widget.widgetConfiguration?.rowConfiguration?.push(
      new ElementModel('Container',{
        widget_type: 'Container',
      style: new StyleModel({
        rowspan: 1,
        backgroundColor: 'white',
      }),
    }));
      
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.rowElementModel!.widget.widget_type = AppConstants.WIDGET_ROW;
    // this.listElementModel!.widget.widgetConfiguration!.listConfiguration = 'Add List Configration Object';
  }

  checkConfiguration() {
    if (this.rowElementModel!.widget.widgetConfiguration === undefined) {
      this.rowElementModel!.widget.widgetConfiguration =
        new WidgetConfiguration();
      this.rowElementModel!.widget.widgetConfiguration!.rowConfiguration = [];
    }
  }
}
