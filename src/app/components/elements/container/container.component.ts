import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { StyleModel } from 'src/app/models/style.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @Input() containerModel: WidgetModel = new WidgetModel({
    widget_type: AppConstants.WIDGET_CONTAINER,
    child: new WidgetModel({
      widget_type: AppConstants.WIDGET_COLUMN,
      children: [],
    }),
  });

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    console.log(this.containerModel);
  }

  onRowSelected(item: WidgetModel, index: number) {
    this.elementService.editSelectedItem(item, index);
    this.elementService.removeRowElementItem();
  }

  removeElement(index: number) {
    this.containerModel!.child!.children?.splice(index, 1);
  }

  getItemRowspan(item: WidgetModel) {
    var rowspan = 1;
    if (item.name === 'Column') {
      if (item.children?.length !== 0) {
        return item.children?.length;
      }
      return 1;
    } else if (item.name === 'Row') {
      item.children!.forEach((element) => {
        if (element.name === 'Column') {
          if (element.children?.length !== 0) {
            rowspan = element.children?.length!;
          }
          return 1;
        }
        return rowspan;
      });
    }
    return rowspan;
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
