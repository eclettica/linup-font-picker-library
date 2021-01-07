import { Component } from '@angular/core';
import { SelectedItem } from 'linup-font-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linup-font-picker-library';
  listItems: any[];
  fontFamily: string;
  stringSelected: string = '';
  selectedChar: string | null = null;
  selectedFontFamily: string | null = null;

  constructor() {
    this.listItems = [];
    for (let i=65; i<123; i++){
      if(i>=91 && i<= 96)
        continue;
      this.listItems.push(String.fromCharCode(i));
    }
    this.fontFamily = 'symbol_signsbasis_set';
  }

  onCharSelected(item: SelectedItem) {
    console.log('app.component onCharSelected', item)
    if(!this.stringSelected)
      this.stringSelected = '';
    if(item && item.value) {
      this.stringSelected += item.value;
      this.selectedChar = item.value;
      this.selectedFontFamily = item.fontFamily;
    }
  }
}
