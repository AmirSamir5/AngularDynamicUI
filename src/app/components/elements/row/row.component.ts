import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ListModel } from 'src/app/models/list.model';
import { StyleModel } from 'src/app/models/style.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() style: StyleModel = new StyleModel({});
  @Input() rows?: WidgetModel[];

  onElementClick(item: WidgetModel, index: number) {
    this.listService.onElementClick(item, index);
  }

  removeElement(index: number) {
    this.rows?.splice(index, 1);
  }

  constructor(private listService: ListElementService) {}

  ngOnInit(): void {
    this.listService.onSetStyleEvent.subscribe((style) => {
      this.style = style;
    });
  }

  getItemFlex(item: WidgetModel): string {
    if (item.style.flex !== undefined) {
      return 'item col-lg-' + item.style.flex;
    }
    return 'item';
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
