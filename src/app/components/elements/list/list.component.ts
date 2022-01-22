import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() listModel: WidgetModel = new WidgetModel({widget_type:AppConstants.WIDGET_LIST});

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    
  }

  onRowSelected(item: WidgetModel, index: number) {
    this.elementService.editSelectedItem(item, index);
    this.elementService.removeRowElementItem();
  }

  removeElement(index: number) {
    this.listModel!.widgetConfiguration?.listConfiguration?.splice(index, 1);
  }

  drag(event: CdkDragDrop<WidgetModel[]>) {
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
