import { EventEmitter, OnInit } from '@angular/core';
import { SelectedItem } from '../selected-item';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<LnFontPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LnFontPickerComponent, "ln-font-picker", never, { "listItems": "listItems"; "fontFamily": "fontFamily"; "closeOnSelect": "closeOnSelect"; }, { "onSelect": "onSelect"; }, never, never>;
}
//# sourceMappingURL=ln-font-picker.component.d.ts.map