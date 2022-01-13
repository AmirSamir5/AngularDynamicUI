import { Component, OnInit,Input } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { WidgetConfiguration } from 'src/app/models/widget.model';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit {
  @Input() listElementModel?: ElementModel;
  @Input() index:number = 0;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.listElementModel!.json.widget_type = AppConstants.WIDGET_LIST;
    this.listElementModel!.json.widgetConfiguration = new WidgetConfiguration();
    this.listElementModel!.json.widgetConfiguration!.listConfiguration = 'Add List Configration Object';
  }


}
