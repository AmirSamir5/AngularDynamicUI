import { Component, OnInit } from '@angular/core';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-elements-properties',
  templateUrl: './elements-properties.component.html',
  styleUrls: ['./elements-properties.component.css'],
})
export class ElementsPropertiesComponent implements OnInit {
  item?: WidgetModel;
  index: number = 0;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.EditElementEvent.subscribe(
      ({ make: item, name: index }) => {
        this.item = item;
        this.index = index;
      }
    );
    this.elementService.onRemoveElementEvent.subscribe(
      ({ make: elementsArr, name: element }) => {
        if (this.item === element) {
          this.item = undefined;
        }
      }
    );
  }
}
