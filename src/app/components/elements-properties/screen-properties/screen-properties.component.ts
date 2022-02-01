import { Component, OnChanges, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ScreenPages } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-screen-properties',
  templateUrl: './screen-properties.component.html',
  styleUrls: ['./screen-properties.component.css'],
})
export class ScreenPropertiesComponent implements OnChanges {
  isScrollable = false;
  screenLookupName: string = '';

  constructor(private elementService: ElementService) {}

  ngOnChanges(): void {}

  onScrollableChange() {
    this.isScrollable = !this.isScrollable;
    if (this.isScrollable) {
      this.elementService.screenModel.widget_type =
        AppConstants.WIDGET_SCROLLVIEW;
    } else {
      this.elementService.screenModel.widget_type = undefined;
    }
  }

  onLookupNameChange(event) {
    this.screenLookupName = event.target.value;
    this.elementService.screenLookup = this.screenLookupName;
  }
}
