import { Component, OnInit } from '@angular/core';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-saved-elements',
  templateUrl: './saved-elements.component.html',
  styleUrls: ['./saved-elements.component.css'],
})
export class SavedElementsComponent implements OnInit {
  elements: Array<WidgetModel> = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    AppEvents.openNavEvent.subscribe(() => {
      if (localStorage.getItem('elements') !== null) {
        this.elements = JSON.parse(localStorage.getItem('elements')!);
      }
    });
  }

  onItemClick(element: WidgetModel) {
    this.elementService.addSelectedItems(element);
  }

  onItemDelete(index: number) {
    if (
      confirm('Are you sure about delete ' + this.elements[index].name + ' ?')
    ) {
      this.elements.splice(index, 1);
      localStorage.setItem('element', JSON.stringify(this.elements));
    }
  }
}
