import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/constants';
import { WidgetModel } from 'src/app/models/widget.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-button-properties',
  templateUrl: './button-properties.component.html',
  styleUrls: ['./button-properties.component.css'],
})
export class ButtonPropertiesComponent implements OnInit {
  @Input() buttonItem?: WidgetModel;
  @Input() index: number = 0;
  @Input() buttonText: string = '';
  @Input() apiCode: string = '';

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.buttonText = this.buttonItem!.fieldTitle ?? '';
    this.apiCode = this.buttonItem!.apiCode ?? '';
  }

  onSubmit() {
    if (this.buttonText === '') {
      window.alert('Please Enter Title');
      return;
    }
    this.buttonItem!.widget_type = AppConstants.WIDGET_SUBMIT_BUTTON;
    this.buttonItem!.fieldTitle = this.buttonText;
    this.buttonItem!.apiCode = this.apiCode;
    this.elementService.onSaveItem(this.buttonItem!, this.index);
    this.buttonText = '';
  }
}
