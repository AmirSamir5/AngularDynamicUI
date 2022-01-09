import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { ElementModel } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-button-properties',
  templateUrl: './button-properties.component.html',
  styleUrls: ['./button-properties.component.css']
})
export class ButtonPropertiesComponent implements OnInit {
  @Input() buttonItem?: ElementModel;
  @Input() index:number = 0;
  @Input() buttonText:string = '';
  

  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
    this.buttonItem!.json.widget_type = AppConstants.WIDGET_SUBMIT_BUTTON;
  }

  onSubmit() {
    this.buttonItem!.json.fieldTitle = this.buttonText;
    this.elementService.onSaveItem(this.buttonItem!,this.index);
    this.buttonItem = undefined;
    this.buttonText = '';
  }

}
