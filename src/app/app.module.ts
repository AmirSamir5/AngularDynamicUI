import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DraggableComponentComponent as DraggableComponent } from './components/draggable-component/draggable-component.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ElementService } from './services/element.service';
import { DropdownComponent } from './components/elements/dropdown/dropdown.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { TextfieldComponent } from './components/elements/textfield/textfield.component';
import { DropdownPropertiesComponent } from './components/elements-properties/dropdown-properties/dropdown-properties.component';
import { TextfieldPropertiesComponent } from './components/elements-properties/textfield-properties/textfield-properties.component';
import { ButtonPropertiesComponent } from './components/elements-properties/button-properties/button-properties.component';
import { ElementsPropertiesComponent } from './components/elements-properties/elements-properties.component';
import { JsonResultDialogComponent } from './components/json-result-dialog/json-result-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ListComponent } from './components/elements/list/list.component';
import { ListPropertiesComponent } from './components/elements-properties/list-properties/list-properties.component';
import { CalendarComponent } from './components/elements/calendar/calendar.component';
import { CalendarPropertiesComponent } from './components/elements-properties/calendar-properties/calendar-properties.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { CheckboxPropertiesComponent } from './components/elements-properties/checkbox-properties/checkbox-properties.component';
import { RowComponent } from './components/elements/row/row.component';
import { RowPropertiesComponent } from './components/elements-properties/row-properties/row-properties.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ScreenPropertiesComponent } from './components/elements-properties/screen-properties/screen-properties.component';
import { ContainerComponent } from './components/elements/container/container.component';
import { ContainerPropertiesComponent } from './components/elements-properties/container-properties/container-properties.component';
import { ColumnComponent } from './components/elements/column/column.component';
import { ColumnPropertiesComponent } from './components/elements-properties/column-properties/column-properties.component';
import { TextviewComponent } from './components/elements/textview/textview.component';
import { TextviewPropertiesComponent } from './components/elements-properties/textview-properties/textview-properties.component';
import { SaveElementComponent } from './components/elements-properties/save-element/save-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DraggableComponent,
    ElementsComponent,
    DropdownComponent,
    ButtonComponent,
    TextfieldComponent,
    DropdownPropertiesComponent,
    TextfieldPropertiesComponent,
    ButtonPropertiesComponent,
    ElementsPropertiesComponent,
    JsonResultDialogComponent,
    ListComponent,
    ListPropertiesComponent,
    CalendarComponent,
    CalendarPropertiesComponent,
    CheckboxComponent,
    CheckboxPropertiesComponent,
    RowComponent,
    RowPropertiesComponent,
    SideMenuComponent,
    ScreenPropertiesComponent,
    ContainerComponent,
    ContainerPropertiesComponent,
    ColumnComponent,
    ColumnPropertiesComponent,
    TextviewComponent,
    TextviewPropertiesComponent,
    SaveElementComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ScrollingModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    MatDividerModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
