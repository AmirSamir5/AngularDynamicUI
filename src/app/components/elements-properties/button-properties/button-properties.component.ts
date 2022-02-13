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

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {}
}
