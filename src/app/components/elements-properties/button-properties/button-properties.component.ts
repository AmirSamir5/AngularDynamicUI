import { Component, EventEmitter, OnInit } from '@angular/core';
import { ElementPropertyService } from 'src/app/services/element-property.service';

@Component({
  selector: 'app-button-properties',
  templateUrl: './button-properties.component.html',
  styleUrls: ['./button-properties.component.css']
})
export class ButtonPropertiesComponent implements OnInit {
  buttonTitle: string = '';
  

  constructor(private elementPropertyService:ElementPropertyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.elementPropertyService.buttonSubmit(this.buttonTitle);
  }

}
