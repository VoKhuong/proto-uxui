import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faSearchPlus = faSearchPlus;
  @Output() showSliderEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.showSliderEvent.emit();
  }

}
