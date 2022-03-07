import { Component, OnInit } from '@angular/core';
import { ScreenModel } from 'src/app/models/screen.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-saved-screens',
  templateUrl: './saved-screens.component.html',
  styleUrls: ['./saved-screens.component.css'],
})
export class SavedScreensComponent implements OnInit {
  screens: Array<ScreenModel> = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.screens = JSON.parse(localStorage.getItem('screens')!) ?? [];
    AppEvents.openNavEvent.subscribe(() => {
      if (localStorage.getItem('screens') !== null) {
        this.screens = JSON.parse(localStorage.getItem('screens')!);
      }
    });
  }

  onItemClick(screen: ScreenModel) {
    this.closeNav();
    this.elementService.clearProperties();
    this.elementService.selectedElements = [];
    screen.screenPages.fields.forEach((field) => {
      this.elementService.addSelectedItems(field);
    });
    this.elementService.savedScreenChoosed(screen);
  }

  onAddNewScreen() {
    this.closeNav();
    this.elementService.clearProperties();
    this.elementService.savedScreenChoosed(new ScreenModel({}));
    this.elementService.selectedElements.splice(
      0,
      this.elementService.selectedElements.length
    );
  }

  closeNav() {
    AppEvents.closeNavEvent.emit();
  }

  clearAll() {
    if (confirm('Are you sure to clear all screens ?')) {
      localStorage.clear();
      this.screens.splice(0, this.screens.length);
    }
  }
}
