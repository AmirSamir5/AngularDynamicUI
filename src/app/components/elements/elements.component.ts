import { Component, OnInit } from '@angular/core';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';
import { SavedScreensComponent } from '../side-menu/saved-screens/saved-screens.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
})
export class ElementsComponent implements OnInit {
  readonly items: WidgetModel[] = [...this.elementService.getElements()];
  screensOpenState = true;
  constructor(private elementService: ElementService) {}

  ngOnInit(): void {}

  elementOnClick(selectedElement: WidgetModel) {
    this.elementService.addSelectedItems(selectedElement);
    this.elementService.removeRowElementItem();
  }

  getItemName(itemName: string): string {
    switch (itemName) {
      case 'Button':
        return 'Button';
      case 'Dropdown':
        return 'Dropdown';
      case 'Input Field':
        return 'Input Field';
      case 'List':
        return 'List';
      case 'Calendar':
        return 'Calendar';
      case 'Checkbox':
        return 'Checkbox';
      case 'Row':
        return 'Row';
      case 'Container':
        return 'Container';
      case 'Column':
        return 'Column';
    }

    return '';
  }
}
