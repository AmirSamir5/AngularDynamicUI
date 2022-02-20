import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppConstants } from 'src/app/constants/constants';
import { ScreenModel, ScreenPages } from 'src/app/models/screen.model';
import { WidgetModel } from 'src/app/models/widget.model';
import { AppEvents } from 'src/app/services/app-events';
import { ElementService } from 'src/app/services/element.service';
import { AddEditActionItemComponent } from '../../dialogs/add-edit-action-item/add-edit-action-item.component';

@Component({
  selector: 'app-screen-properties',
  templateUrl: './screen-properties.component.html',
  styleUrls: ['./screen-properties.component.css'],
})
export class ScreenPropertiesComponent implements OnInit {
  screenProperty?: ScreenModel;
  actionItems: Array<WidgetModel> = [];

  constructor(
    private elementService: ElementService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.screenProperty =
      this.elementService.screenModel ?? new ScreenModel({});
    AppEvents.onScreenSelectEvent.subscribe((screen) => {
      this.screenProperty = screen;
    });
  }

  onScrollableChange() {
    this.screenProperty!.screenPages.isScrollable =
      !this.screenProperty!.screenPages.isScrollable;
  }

  onAppbarChange() {
    AppEvents.onScreenSelectEvent.emit(this.screenProperty!);
  }

  onAddActionItem() {
    this.actionItems.push({
      name: 'Icon',
      iconName: 'add',
      style: {},
      widgetConfiguration: {
        clickableConfiguration: {
          destination_screen_lookUp: {},
          passedKeys: [],
        },
      },
    });
    const dialogRef = this.dialog.open(AddEditActionItemComponent, {
      width: '50%',
      data: this.actionItems[this.actionItems.length - 1],
    });
  }
}
