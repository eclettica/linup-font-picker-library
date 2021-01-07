import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinupFontPickerComponent } from './linup-font-picker.component';

describe('LinupFontPickerComponent', () => {
  let component: LinupFontPickerComponent;
  let fixture: ComponentFixture<LinupFontPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinupFontPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinupFontPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
