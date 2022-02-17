import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ScreenModel, ScreenPages } from 'src/app/models/screen.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';
import { SavedElementsComponent } from './saved-elements/saved-elements.component';
import { SavedScreensComponent } from './saved-screens/saved-screens.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  width = '0%';
  public savedScreens = SavedScreensComponent;
  public savedElements = SavedElementsComponent;

  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.closeNav();
    }
  }

  constructor(private eRef: ElementRef) {}

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
