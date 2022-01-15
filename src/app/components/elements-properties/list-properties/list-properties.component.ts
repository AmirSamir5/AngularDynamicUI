import { Component, OnInit,Input } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { WidgetConfiguration } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit {
  @Input() listElementModel?: ElementModel;
  @Input() index:number = 0;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {}

  onSelectText(){
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push(
      {type: 'Text', flex: 2, color: 'lightblue'},
    );
    this.elementService.onSaveItem(this.listElementModel!,this.index);
  }

  onSelectButton(){
    this.checkConfiguration();
    this.listElementModel!.json.widgetConfiguration?.listConfiguration?.push(
      {type: 'Button', flex: 2, color: 'lightgreen'},
    );
    this.elementService.onSaveItem(this.listElementModel!,this.index);
  }

  onSubmit() {
    this.checkConfiguration();
    this.listElementModel!.json.widget_type = AppConstants.WIDGET_LIST;
    // this.listElementModel!.json.widgetConfiguration!.listConfiguration = 'Add List Configration Object';
  }

  checkConfiguration(){
    if(this.listElementModel!.json.widgetConfiguration === undefined){
      this.listElementModel!.json.widgetConfiguration = new WidgetConfiguration();
      this.listElementModel!.json.widgetConfiguration!.listConfiguration = [];
    }
  }


}
