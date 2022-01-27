import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';
// import { ListElementService } from 'src/app/services/list-element.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() row?: WidgetModel = new WidgetModel({
    widget_type: AppConstants.WIDGET_ROW,
    name: 'Row',
  });

  onElementClick(item: WidgetModel, index: number) {
    this.elementService.editRowElementItem(this.row!.children![index], index);
  }

  removeElement(index: number) {
    this.row?.children!.splice(index, 1);
    this.elementService.removeRowElementItem();
  }

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {}

  getItemFlex(item: WidgetModel): string {
    if (item.style.flex !== undefined) {
      return 'item col-lg-' + item.style.flex;
    }
    return 'item';
  }

  getRowMainAxis(mainAxisAlignment:string){
    switch(mainAxisAlignment){
      case ('spaceBetween'):
        return 'space-between';
      case ('spaceEvenly'):
        return 'space-evenly';
      case ('spaceAround'):
        return 'space-around';
    }
    return mainAxisAlignment;
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
    return item.style.decoration!.color?.toString(16).replace('ff', '#');
  }

  getItemColor(item: WidgetModel) {
    return (item.child ?? item).style!.color!.toString(16).replace('ff', '#');
  }
}
