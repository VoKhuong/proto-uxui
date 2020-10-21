import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-font-slider',
  templateUrl: './font-slider.component.html',
  styleUrls: ['./font-slider.component.scss']
})
export class FontSliderComponent implements OnInit {

  @Output() editFontSizeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSlider(event: MatSliderChange): void {
    this.editFontSizeEvent.emit(event.value);
  }

}
