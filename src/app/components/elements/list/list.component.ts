import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() listModel: ElementModel = new ElementModel('List',new WidgetModel());

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    
  }

  onRowSelected(item: ElementModel, index: number) {
    this.elementService.editSelectedItem(item, index);
  }

  removeElement(index: number) {
    this.listModel!.widget.widgetConfiguration?.listConfiguration?.splice(index, 1);
  }

  drag(event: CdkDragDrop<ElementModel[]>) {
    console.log(
      event.container,
      event.previousContainer,
      event.container === event.previousContainer
    );
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
