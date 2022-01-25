// import { EventEmitter } from '@angular/core';
// import { ElementModel } from '../models/element.model';
// import { StyleModel } from '../models/style.model';

// export class ListElementService {
//   onElementClickEvent = new EventEmitter<{
//     make: ElementModel;
//     name: number;
//   }>();
//   onRowClickEvent = new EventEmitter<{
//     make: ElementModel;
//     name: number;
//   }>();
//   onEditElementEvent = new EventEmitter<{ make: ElementModel; name: number }>();
//   onSetStyleEvent = new EventEmitter<StyleModel>();

//   onElementClick(item: ElementModel, index: number) {
//     this.onElementClickEvent.emit({ make: item, name: index });
//   }
//   onEditElementClick(item: ElementModel, index: number) {
//     this.onElementClickEvent.emit({ make: item, name: index });
//   }
//   onSetRowStyle(style: StyleModel) {
//     this.onSetStyleEvent.emit(style);
//   }
//   onRowItemSelect(item: ElementModel, index: number){
//     this.onRowClickEvent.emit({ make: item, name: index });
//   }
// }
