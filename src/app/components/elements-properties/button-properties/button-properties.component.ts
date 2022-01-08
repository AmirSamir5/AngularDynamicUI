import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-button-properties',
  templateUrl: './button-properties.component.html',
  styleUrls: ['./button-properties.component.css']
})
export class ButtonPropertiesComponent implements OnInit {
  @Input() buttonTitle: string = '';
  

  constructor(private elementService:ElementService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.buttonTitle = '';
  }

}
