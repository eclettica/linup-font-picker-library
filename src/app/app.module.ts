import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinupFontPickerModule } from 'linup-font-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinupFontPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
