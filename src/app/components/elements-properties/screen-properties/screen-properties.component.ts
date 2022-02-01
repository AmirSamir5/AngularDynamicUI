import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ScreenPages } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-screen-properties',
  templateUrl: './screen-properties.component.html',
  styleUrls: ['./screen-properties.component.css']
})
export class ScreenPropertiesComponent implements OnInit {
  isScrollable = true;
  screenProperty?:ScreenPages;

  constructor(private elementService:ElementService) {}

  ngOnInit(): void {
    this.elementService.screenModel.widget_type = AppConstants.WIDGET_SCROLLVIEW;
    this.screenProperty = this.elementService.screenModel;
  }

  onScrollableChange(){
    this.isScrollable = !this.isScrollable;
    if(this.isScrollable){
      this.elementService.screenModel.widget_type = AppConstants.WIDGET_SCROLLVIEW;
    }else{
      this.elementService.screenModel.widget_type = undefined;
    }
  }

}
