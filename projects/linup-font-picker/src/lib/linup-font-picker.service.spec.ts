import { TestBed } from '@angular/core/testing';

import { LinupFontPickerService } from './linup-font-picker.service';

describe('LinupFontPickerService', () => {
  let service: LinupFontPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinupFontPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
