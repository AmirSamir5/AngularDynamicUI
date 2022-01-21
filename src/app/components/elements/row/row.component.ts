import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';
// import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() row?: ElementModel = new ElementModel('Row',new WidgetModel());

  onElementClick(item: ElementModel, index: number) {
    this.elementService.editRowElementItem(this.row!.widget.widgetConfiguration!.rowConfiguration![index], index);
  }

  removeElement(index: number) {
    this.row?.widget.widgetConfiguration?.rowConfiguration!.splice(index, 1);
    this.elementService.removeRowElementItem();
  }

  constructor(private elementService:ElementService) {}

  ngOnInit(): void {
    
  }

  getItemFlex(item: WidgetModel): string {
    if (item.style.flex !== undefined) {
      return 'item col-lg-' + item.style.flex;
    }
    return 'item';
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
