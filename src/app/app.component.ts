import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fontSize = 14;
  showSlider = false;

  changeFontSize(event: number): void {
    this.fontSize = event;
  }
}
