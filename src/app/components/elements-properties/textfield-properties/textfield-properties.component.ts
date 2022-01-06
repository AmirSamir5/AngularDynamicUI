import { Component, Input, OnInit } from '@angular/core';
import { InputFieldElementModel } from 'src/app/models/input-field.model';

@Component({
  selector: 'app-textfield-properties',
  templateUrl: './textfield-properties.component.html',
  styleUrls: ['./textfield-properties.component.css'],
})
export class TextfieldPropertiesComponent implements OnInit {
  @Input() inputFieldElementModel: InputFieldElementModel =
    new InputFieldElementModel(
      'DropTextfielddown',
      '',
      '',
      '',
      false,
      0,
      0,
      '',
      '',
      '',
      '',
      0
    );
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.inputFieldElementModel);
  }
}
