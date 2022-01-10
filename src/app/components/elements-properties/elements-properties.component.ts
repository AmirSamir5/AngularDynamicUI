import { Component, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { JSONModel } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-elements-properties',
  templateUrl: './elements-properties.component.html',
  styleUrls: ['./elements-properties.component.css'],
})
export class ElementsPropertiesComponent implements OnInit {
  item?: ElementModel;
  index: number = 0;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.EditElementEvent.subscribe(
      ({ make: item, name: index }) => {
        this.item = item;
        this.index = index;
      }
    );
    this.elementService.onRemoveElementEvent.subscribe((elements) => {
      this.item = undefined;
    });
  }
}
