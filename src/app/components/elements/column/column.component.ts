import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() columnModel: WidgetModel = new WidgetModel({
    widget_type: AppConstants.WIDGET_CONTAINER,
    child: new WidgetModel({
      widget_type: AppConstants.WIDGET_COLUMN
    }),
  });

  constructor(private elementService: ElementService) { }

  ngOnInit(): void {
  }

  onElementClick(item: WidgetModel, index: number) {
    this.elementService.editSelectedItem(this.columnModel.child, index);
    this.elementService.editRowElementItem(this.columnModel.child!.children![index], index);
  }

  removeElement(index: number) {
    this.columnModel.child!.children?.splice(index, 1);
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

  getItemBackgroundColor(item: WidgetModel) {
    if(item.style.decoration === undefined){
      return 'grey';
    }
    return item.style.decoration!.color?.toString(16).replace('ff', '#');
  }

  getItemColor(item: WidgetModel) {
    if(item.child === undefined){
      return 'black';
    }
    return item.child!.style!.color!.toString(16).replace('ff', '#');
  }

}
