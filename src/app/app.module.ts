import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DraggableComponentComponent as DraggableComponent } from './components/draggable-component/draggable-component.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ElementService } from './services/element.service';
import { DropdownComponent } from './components/elements/dropdown/dropdown.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { TextfieldComponent } from './components/elements/textfield/textfield.component';
import { TextComponent } from './components/elements/text/text.component';

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
    TextComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ScrollingModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
