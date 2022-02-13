import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit,OnChanges {
  @Input() showTitle = true;
  @Input() columnModel?: WidgetModel;

  constructor(private elementService: ElementService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.columnModel);
  }

  ngOnInit(): void {
  }

  onElementClick(item: WidgetModel, index: number) {
    this.elementService.editSelectedItem(this.columnModel, index);
    this.elementService.editRowElementItem(this.columnModel!.children![index], index);
  }

  removeElement(index: number) {
    this.columnModel!.children?.splice(index, 1);
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
