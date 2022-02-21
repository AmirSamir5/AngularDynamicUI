import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ScreenModel, ScreenPages } from 'src/app/models/screen.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';
import { SavedElementsComponent } from './saved-elements/saved-elements.component';
import { SavedScreensComponent } from './saved-screens/saved-screens.component';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: any;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  width = '0%';
  asyncTabs?: Observable<ExampleTab[]>;
  screensOpenState = true;

  
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.closeNav();
    }
  }

  constructor(private eRef: ElementRef) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Screens', content: SavedScreensComponent},
          {label: 'Elements', content: SavedElementsComponent},
        ]);
      }, 1000);
    });
  }

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
