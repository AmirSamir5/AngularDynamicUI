import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from 'src/app/models/element.model';
import { ElementPropertyService } from 'src/app/services/element-property.service';

@Component({
  selector: 'app-textfield-properties',
  templateUrl: './textfield-properties.component.html',
  styleUrls: ['./textfield-properties.component.css'],
})
export class TextfieldPropertiesComponent implements OnInit {
  @Input() inputFieldElementModel?: ElementModel;
  constructor(private elementPropertyService: ElementPropertyService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.inputFieldElementModel);
    this.elementPropertyService.inputFieldSaveEvent(
      this.inputFieldElementModel!
    );
  }
}
