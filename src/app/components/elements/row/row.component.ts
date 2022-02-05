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
    if(item.name === 'Column'){
      this.elementService.editSelectedItem(item, index);
      return;
    }
    this.elementService.editSelectedItem(this.row!, index);
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
    if (item.child !== undefined){
      if(item.child.widget_type === AppConstants.WIDGET_IMAGE){
        var color = 4294940672;
        return color.toString(16).replace('ff', '#');
      }
    }
    if(item.style.decoration !== undefined){
      return item.style.decoration!.color?.toString(16).replace('ff', '#');
    }
    return '#FFFFFF'
  }

  getItemColor(item: WidgetModel) {
    if((item.child ?? item).style!.color !== undefined) {
      return (item.child ?? item).style!.color!.toString(16).replace('ff', '#');
    } 
    return;
  }
}
