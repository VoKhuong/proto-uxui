import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSliderComponent } from './font-slider.component';

describe('FontSliderComponent', () => {
  let component: FontSliderComponent;
  let fixture: ComponentFixture<FontSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
