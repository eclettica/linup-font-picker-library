import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinupFontPickerComponent } from './linup-font-picker.component';
import { LnFontPickerComponent } from './ln-font-picker/ln-font-picker.component';



@NgModule({
  declarations: [LinupFontPickerComponent, LnFontPickerComponent],
  imports: [
    CommonModule
  ],
  exports: [LinupFontPickerComponent, LnFontPickerComponent]
})
export class LinupFontPickerModule { }
