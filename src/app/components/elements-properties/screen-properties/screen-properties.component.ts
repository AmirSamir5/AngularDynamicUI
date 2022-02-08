import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ScreenPages } from 'src/app/models/json.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-screen-properties',
  templateUrl: './screen-properties.component.html',
  styleUrls: ['./screen-properties.component.css'],
})
export class ScreenPropertiesComponent implements OnInit {
  isScrollable = true;
  screenProperty?: ScreenPages;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.screenModel.widget_type =
      AppConstants.WIDGET_SCROLLVIEW;
    this.screenProperty = this.elementService.screenModel;
    AppEvents.onScreenSelectEvent.subscribe((screen) => {
      this.screenProperty = screen.screenPages[0];
      if (this.isScrollable) {
        this.elementService.screenModel.widget_type =
          AppConstants.WIDGET_SCROLLVIEW;
      } else {
        this.elementService.screenModel.widget_type = undefined;
      }
    });
  }

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
    this.elementService.screenModel.page_name = event.target.value;
  }

  onScreenIdChange(event) {
    this.elementService.screenId = +event.target.value;
  }
}
