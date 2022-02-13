import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ScreenModel, ScreenPages } from 'src/app/models/screen.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-screen-properties',
  templateUrl: './screen-properties.component.html',
  styleUrls: ['./screen-properties.component.css'],
})
export class ScreenPropertiesComponent implements OnInit {
  screenProperty?: ScreenModel;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.screenProperty = this.elementService.screenModel ?? new ScreenModel({});
    AppEvents.onScreenSelectEvent.subscribe((screen) => {
      this.screenProperty = screen;
    });
  }

  onScrollableChange() {
    this.screenProperty!.screenPages.isScrollable = !this.screenProperty!.screenPages.isScrollable
  }

  onAppbarChange(){
    AppEvents.onScreenSelectEvent.emit(this.screenProperty!);
  }
}
