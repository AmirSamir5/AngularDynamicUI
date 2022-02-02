import { Component, Input, OnInit } from '@angular/core';
import { JSONModel, ScreenPages } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  width = "0%";
  screens:Array<JSONModel> = [];
  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
  }

  onItemClick(screen: JSONModel){
    this.closeNav();
    this.elementService.clearProperties();
    this.elementService.selectedElements = [];
    this.elementService.screenName = screen.screen_name!;
    this.elementService.changeAppbarEvent.emit(screen.screen_name!);
    screen.screenPages.forEach((element) => {
      element.fields.forEach((field) => {
        this.elementService.addSelectedItems(field);
      });
    });
    this.elementService.savedScreenChoosed(screen);
  }

  onAddNewScreen(){
    this.closeNav();
    this.elementService.clearProperties();
    this.elementService.screenName = '';
    this.elementService.savedScreenChoosed(new JSONModel('',7,[new ScreenPages('',[])]));
    this.elementService.changeAppbarEvent.emit('appbar title');
    this.elementService.selectedElements.splice(0,this.elementService.selectedElements.length);
  }

  openNav() {
    this.width = "20%";
    if(localStorage.getItem("screens") !== null){
      this.screens = JSON.parse(localStorage.getItem("screens")!);
    }
  }

  closeNav() {
    this.width = "0%"
  }

  onItemDelete(index:number){
    if(confirm("Are you sure about delete " + this.screens[index].screen_name + ' ?')) {
      this.screens.splice(index,1);
      localStorage.setItem("screens",JSON.stringify(this.screens));
    }
  }

  clearAll(){
    if(confirm("Are you sure to clear all screens ?")) {
      localStorage.clear();
      this.screens.splice(0,this.screens.length);
    }
  }

}
