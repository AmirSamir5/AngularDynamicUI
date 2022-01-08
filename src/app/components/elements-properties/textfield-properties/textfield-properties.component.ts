import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-textfield-properties',
  templateUrl: './textfield-properties.component.html',
  styleUrls: ['./textfield-properties.component.css'],
})
export class TextfieldPropertiesComponent implements OnInit {
  @Input() inputFieldElementModel?: ElementModel;
  constructor(private elementService:ElementService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.inputFieldElementModel);
    // this.elementPropertyService.inputFieldSaveEvent(
    //   this.inputFieldElementModel!
    // );
  }
}
