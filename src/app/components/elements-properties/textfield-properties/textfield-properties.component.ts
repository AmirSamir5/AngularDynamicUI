import { Component, Input, OnInit } from '@angular/core';
import { InputFieldElementModel } from 'src/app/models/input-field.model';
import { ElementPropertyService } from 'src/app/services/element-property.service';

@Component({
  selector: 'app-textfield-properties',
  templateUrl: './textfield-properties.component.html',
  styleUrls: ['./textfield-properties.component.css'],
})
export class TextfieldPropertiesComponent implements OnInit {
  @Input() inputFieldElementModel: InputFieldElementModel =
    new InputFieldElementModel('', '', '', false, 0, 0, '', '', '', '', 0);
  constructor(private elementPropertyService: ElementPropertyService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.inputFieldElementModel.title === '' ||
      this.inputFieldElementModel.hintText === '' ||
      this.inputFieldElementModel.maxLength <= 0 ||
      this.inputFieldElementModel.minLength <= 0
    ) {
      confirm('Please Fill All Fields');
      return;
    }
    console.log(this.inputFieldElementModel);
    this.elementPropertyService.inputFieldSaveEvent(
      this.inputFieldElementModel
    );
  }
}
