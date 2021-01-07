import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedItem } from '../selected-item';

@Component({
  selector: 'ln-font-picker',
  templateUrl: './ln-font-picker.component.html',
  styleUrls: ['./ln-font-picker.component.scss']
})
export class LnFontPickerComponent implements OnInit {

  @Input('listItems')
  listItems!: Array<string>;

  @Input('fontFamily')
  fontFamily!: string;

  @Input('closeOnSelect')
  closeOnSelect!: boolean;

  @Output()
  onSelect = new EventEmitter<SelectedItem>();


  arePickerShown: boolean = false;

  constructor() {
    console.log('ln-font-picker-component constructor');
  }

  ngOnInit(): void {
    if (!this.listItems) {
      this.listItems = [];
      for (let i = 65; i < 123; i++) {
        if (i >= 91 && i <= 96)
          continue;
        this.listItems.push(String.fromCharCode(i));
      }
    }

    if(this.closeOnSelect == undefined || this.closeOnSelect == null)
      this.closeOnSelect = true;

  }

  togglePicker() {
    this.arePickerShown = !this.arePickerShown;
  }

  itemCliecked(item: string) {
    console.log('item clicked...', item);
    this.onSelect.emit({fontFamily: this.fontFamily, value: item});
    if(this.closeOnSelect && this.closeOnSelect == true)
      this.arePickerShown = false;
  }

}
