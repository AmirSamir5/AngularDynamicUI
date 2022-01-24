import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
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
  selectedElement?: WidgetModel;
  listIndex: number = 0;
  justifyArr = AppConstants.JUSTIFY_LIST;
  crossAxisArr = AppConstants.CROSS_AXIS_ALIGNMENT_LIST;
  mainAxisSizeArr = AppConstants.MAIN_AXIS_SIZE_LIST;
  textDirectionArr = AppConstants.TEXT_DIRECTION_LIST;
  varticalDirectionArr = AppConstants.VERTICAL_DIRECTION_LIST;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.EditRowElementEvent.subscribe(
      ({ make: itemList, name: index }) => {
        this.selectedElement = itemList;
      }
    );
    this.elementService.RemoveRowElementEvent.subscribe(() => {
      this.selectedElement = undefined;
    });
  }

  onExpandedChange() {
    this.selectedElement!.style.flex = undefined;
    this.rowElementModel!.style.mainAxisAlignment = '';
  }

  getFlexValue(event) {
    this.selectedElement!.style.expanded = false;
    this.selectedElement!.style.mainAxisAlignment = event.target.value;
  }

  getRowSpan(event) {
    this.selectedElement!.style.rowspan = event.target.value;
  }

  getBackgroundColorValue(event) {
    this.selectedElement!.style.backgroundColor = event.target.value;
  }

  getColorValue(event) {
    this.selectedElement!.style.color = event.target.value;
  }

  getFontSizeValue(event) {
    this.selectedElement!.style.fontSize = event.target.value;
  }

  getFontFamilyValue(event) {
    this.selectedElement!.style.fontFamily = event.target.value;
  }

  getFontWeightValue(event) {
    this.selectedElement!.style.fontWeight = event.target.value;
  }

  onSelectText() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_TEXT,
        name: 'Text',
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'white',
          color: 'black',
          fontFamily: 'Robota-Regular',
          fontSize: 12,
          fontWeight: 'normal',
        }),
      })
    );
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectButton() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_BUTTON,
        name: 'Button',
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'deeppink',
          color: 'white',
          fontFamily: 'Robota-Regular',
          fontSize: 12,
          fontWeight: 'normal',
        }),
      })
    );
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectIcon() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_ICON,
        name: 'Icon',
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'deeppink',
          color: 'white',
          fontFamily: 'Robota-Regular',
          fontSize: 12,
          fontWeight: 'normal',
        }),
      })
    );
    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSelectEmpty() {
    this.checkConfiguration();
    this.rowElementModel!.children?.push(
      new WidgetModel({
        widget_type: AppConstants.WIDGET_CONTAINER,
        name: 'Empty',
        style: new StyleModel({
          rowspan: 1,
          backgroundColor: 'white',
        }),
      })
    );

    // this.elementService.onSaveItem(this.listElementModel!, this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.rowElementModel!.widget_type = AppConstants.WIDGET_ROW;
  }

  checkConfiguration() {
    if (this.rowElementModel!.children === undefined) {
      this.rowElementModel!.children = [];
    }
  }
}
