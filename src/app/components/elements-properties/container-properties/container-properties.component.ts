import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import {
  BorderRadiusModel,
  BoxDecoration,
  EdgeInsetsModel,
  StyleModel,
} from 'src/app/models/style.model';
import {
  ClickableConfiguration,
  DestinationScreenLookup,
  LoadDataConfiguration,
  WidgetConfiguration,
  WidgetModel,
} from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-container-properties',
  templateUrl: './container-properties.component.html',
  styleUrls: ['./container-properties.component.css'],
})
export class ContainerPropertiesComponent implements OnInit, OnChanges {
  @Input() containerElementModel?: WidgetModel;
  @Input() index: number = 0;
  item?: WidgetModel;
  listIndex: number = 0;
  clickablesArr = AppConstants.CLICKABLE_CONFIGURATION;
  listDirectionsArr = AppConstants.LIST_DIRECTION;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    console.log(this.containerElementModel);
    this.containerElementModel!.child = {
      ...this.containerElementModel!.child!,
    };
    this.containerElementModel!.child!.children =
      this.containerElementModel!.child!.children!.slice();
    if (this.containerElementModel?.style.decoration === undefined) {
      this.containerElementModel!.style = new StyleModel({});
      this.containerElementModel!.style.decoration = new BoxDecoration({
        color: 4294967295,
      });
    }
    if (this.containerElementModel!.widgetConfiguration === undefined) {
      this.containerElementModel!.widgetConfiguration =
        new WidgetConfiguration();
    }
    if (
      this.containerElementModel!.widgetConfiguration!
        .clickableConfiguration === undefined
    ) {
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration =
        new ClickableConfiguration({
          type: '',
          isClickable: false,
          passedKeys: [],
          destination_screen_lookUp: new DestinationScreenLookup({
            type: '',
            name: '',
          }),
        });
    }
    if (
      this.containerElementModel!.widgetConfiguration!.loadDataConfiguration ===
      undefined
    ) {
      this.containerElementModel!.widgetConfiguration.loadDataConfiguration =
        new LoadDataConfiguration({
          isLoadData: false,
          passedKeys: [],
          type: '',
          lookUpName: '',
          apiCode: '',
        });
    }
    this.containerElementModel!.widgetConfiguration!.showedFields = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.containerElementModel);
    this.containerElementModel!.child = {
      ...this.containerElementModel!.child!,
    };
    this.containerElementModel!.child!.children =
      this.containerElementModel!.child!.children!.slice();

    if (this.containerElementModel?.style.decoration === undefined) {
      this.containerElementModel!.style.decoration = new BoxDecoration({
        color: 4294967295,
      });
    }

    if (this.containerElementModel!.widgetConfiguration === undefined) {
      this.containerElementModel!.widgetConfiguration =
        new WidgetConfiguration();
    }
    if (
      this.containerElementModel!.widgetConfiguration!
        .clickableConfiguration === undefined
    ) {
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration =
        new ClickableConfiguration({
          type: '',
          passedKeys: [],
          destination_screen_lookUp: new DestinationScreenLookup({
            type: '',
            name: '',
          }),
        });
    }
    this.containerElementModel!.widgetConfiguration!.showedFields = [];
  }

  onAddRow() {
    this.checkConfiguration();
    this.containerElementModel!.child!.children?.push(
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
    console.log('container properties', this.containerElementModel);
  }

  onSubmit() {
    this.checkConfiguration();
    this.containerElementModel!.widget_type = AppConstants.WIDGET_CONTAINER;
  }

  checkConfiguration() {
    if (this.containerElementModel!.child!.children === undefined) {
      this.containerElementModel!.child!.children = [];
    }
  }

  onPadding(event) {
    var paddings = event.target.value;
    if (this.containerElementModel!.style.padding === undefined)
      this.containerElementModel!.style.padding = new EdgeInsetsModel({});
    this.containerElementModel!.style.padding!.top = +paddings;
    this.containerElementModel!.style.padding!.bottom = +paddings;
    this.containerElementModel!.style.padding!.left = +paddings;
    this.containerElementModel!.style.padding!.right = +paddings;
  }

  onMargin(event) {
    var margins = event.target.value;
    if (this.containerElementModel!.style.margin === undefined)
      this.containerElementModel!.style.margin = new EdgeInsetsModel({});
    this.containerElementModel!.style.margin!.top = +margins;
    this.containerElementModel!.style.margin!.bottom = +margins;
    this.containerElementModel!.style.margin!.left = +margins;
    this.containerElementModel!.style.margin!.right = +margins;
  }

  onClickablChange() {
    // this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.
    if (
      !this.containerElementModel!.widgetConfiguration!.clickableConfiguration!
        .isClickable
    ) {
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.apiCode =
        '';
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.name =
        '';
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.destination_screen_lookUp!.type =
        '';
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.passedKeys =
        [];
      this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.type =
        '';
    }
  }

  onLookupChange() {
    if (
      this.containerElementModel!.widgetConfiguration!.loadDataConfiguration!
        .isLoadData
    ) {
      this.containerElementModel!.widgetConfiguration!.loadDataConfiguration!.type =
        'LoadDataActionType.callLookUp';
    } else {
      this.containerElementModel!.widgetConfiguration!.loadDataConfiguration!.type =
        '';
      this.containerElementModel!.widgetConfiguration!.loadDataConfiguration!.lookUpName =
        '';
    }
  }

  onPassedKeys(event) {
    console.log(event.target.value);
    this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.passedKeys =
      event.target.value.split(' ');
  }

  getPassedDataValue(): string {
    var result: string = '';
    this.containerElementModel!.widgetConfiguration!.clickableConfiguration!.passedKeys!.forEach(
      (element) => {
        result = result + element + ' ';
      }
    );
    return result;
  }

  getBorderRadiusValue(event) {
    var radius = event.target.value;
    if (
      this.containerElementModel?.child?.cell?.style.decoration === undefined
    ) {
      this.containerElementModel!.style.decoration = new BoxDecoration({
        border: { color: 4293347734, width: 0.6, style: 'solid' },
      });
    }

    this.containerElementModel!.style.decoration!.borderRadius =
      new BorderRadiusModel({
        topLeft: +radius,
        topRight: +radius,
        bottomLeft: +radius,
        bottomRight: +radius,
      });
  }
}
