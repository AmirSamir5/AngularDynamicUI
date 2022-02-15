import { Component, Input, OnInit } from '@angular/core';
import { ScreenModel, ScreenPages } from 'src/app/models/screen.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  width = '0%';
  constructor() {}

  ngOnInit(): void {
    AppEvents.closeNavEvent.subscribe(()=> {
      this.width = '0%';
    });
    AppEvents.openNavEvent.subscribe(()=> {
      this.width = '20%';
    });
  }

  openNav() {
    AppEvents.openNavEvent.emit();
  }

  closeNav(){
    AppEvents.closeNavEvent.emit();
  }
  
}
