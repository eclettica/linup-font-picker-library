import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnFontPickerComponent } from './ln-font-picker.component';

describe('LnFontPickerComponent', () => {
  let component: LnFontPickerComponent;
  let fixture: ComponentFixture<LnFontPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LnFontPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LnFontPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
