import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-properties',
  templateUrl: './button-properties.component.html',
  styleUrls: ['./button-properties.component.css']
})
export class ButtonPropertiesComponent implements OnInit {
  buttonTitle: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.buttonTitle);
    return this.buttonTitle;
  }

}
