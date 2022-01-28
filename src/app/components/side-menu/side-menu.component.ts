import { Component, Input, OnInit } from '@angular/core';
import { JSONModel } from 'src/app/models/json.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  width = "0%";
  screen?:JSONModel;
  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
  }

  onItemClick(){
    this.closeNav();
    this.elementService.selectedElements = [];
    this.elementService.screenName = this.screen?.screen_name!;
    this.elementService.changeAppbarEvent.emit(this.screen?.screen_name!);
    this.screen?.screenPages.forEach((element) => {
      element.fields.forEach((field) => {
        this.elementService.addSelectedItems(field);
      });
    });
  }

  openNav() {
    this.width = "20%";
    this.screen = JSON.parse(localStorage.getItem("screens")!);

  }

  closeNav() {
    this.width = "0%"
  }

  getScreens(){
    
    
  }

}
