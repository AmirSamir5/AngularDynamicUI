import { Component } from '@angular/core';
import { ElementService } from './services/element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vericash-angular-tool';
  durationInSeconds = 2;

  constructor(private elementService: ElementService) {}
}
