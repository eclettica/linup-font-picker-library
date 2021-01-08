import { EventEmitter, OnInit } from '@angular/core';
import { SelectedItem } from '../selected-item';
export declare class LnFontPickerComponent implements OnInit {
    listItems: Array<string>;
    fontFamily: string;
    closeOnSelect: boolean;
    onSelect: EventEmitter<SelectedItem>;
    arePickerShown: boolean;
    constructor();
    ngOnInit(): void;
    togglePicker(): void;
    itemCliecked(item: string): void;
}
