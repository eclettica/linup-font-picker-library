import { CommonModule } from '@angular/common';
import { Injectable, Component, EventEmitter, Input, Output, defineInjectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/linup-font-picker.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinupFontPickerService {
    constructor() { }
}
LinupFontPickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LinupFontPickerService.ctorParameters = () => [];
/** @nocollapse */ LinupFontPickerService.ngInjectableDef = defineInjectable({ factory: function LinupFontPickerService_Factory() { return new LinupFontPickerService(); }, token: LinupFontPickerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/linup-font-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinupFontPickerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LinupFontPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'linup-font-picker',
                template: `
    <ln-font-picker>
    </ln-font-picker>
  `
            }] }
];
/** @nocollapse */
LinupFontPickerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/selected-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectedItem {
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ln-font-picker/ln-font-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LnFontPickerComponent {
    constructor() {
        this.onSelect = new EventEmitter();
        this.arePickerShown = false;
        console.log('ln-font-picker-component constructor');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.listItems) {
            this.listItems = [];
            for (let i = 65; i < 123; i++) {
                if (i >= 91 && i <= 96)
                    continue;
                this.listItems.push(String.fromCharCode(i));
            }
        }
        if (this.closeOnSelect == undefined || this.closeOnSelect == null)
            this.closeOnSelect = true;
    }
    /**
     * @return {?}
     */
    togglePicker() {
        this.arePickerShown = !this.arePickerShown;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    itemCliecked(item) {
        console.log('item clicked...', item);
        this.onSelect.emit({ fontFamily: this.fontFamily, value: item });
        if (this.closeOnSelect && this.closeOnSelect == true)
            this.arePickerShown = false;
    }
}
LnFontPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ln-font-picker',
                template: "<div class=\"fp-picker-container\" [ngClass]=\"{'fp-open': arePickerShown}\">\n  <div class=\"fp-picker\" (click)=\"togglePicker()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n      <path\n        d=\"M27.951,10.997c-0.105-0.322-0.365-0.569-0.692-0.657l-7.303-1.956l-4.117-6.341c-0.369-0.568-1.309-0.568-1.678,0 l-4.117,6.341L2.741,10.34c-0.327,0.087-0.587,0.334-0.692,0.657c-0.104,0.322-0.039,0.675,0.174,0.938l4.759,5.875l-0.396,7.55 c-0.018,0.338,0.137,0.662,0.411,0.861c0.274,0.2,0.63,0.245,0.946,0.125L15,23.636l7.058,2.71c0.116,0.044,0.237,0.066,0.358,0.066 c0.208,0,0.415-0.065,0.588-0.191c0.274-0.199,0.429-0.523,0.411-0.861l-0.396-7.55l4.759-5.875 C27.99,11.672,28.056,11.319,27.951,10.997z M19,16h-3v3c0,0.553-0.447,1-1,1s-1-0.447-1-1v-3h-3c-0.553,0-1-0.447-1-1s0.447-1,1-1 h3v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3h3c0.553,0,1,0.447,1,1S19.553,16,19,16z\">\n      </path>\n    </svg>\n  </div>\n  <div #container>\n    <div [ngClass]=\"{'fp-hide': !arePickerShown}\" class=\"fp-popup fp-picker-wrapper\"\n      [ngStyle]=\"{'font-family': fontFamily}\">\n      <span *ngFor=\"let item of listItems\" (click)=\"itemCliecked(item)\">\n        {{item}}\n      </span>\n    </div>\n  </div>\n</div>\n",
                styles: [".fp-picker-container{position:relative}.fp-picker-container .fp-picker{position:relative;display:inline-block;margin-left:10px;border-radius:3px;height:24px;width:24px}.fp-picker-container .fp-popup{position:relative;width:200px;height:200px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr}.fp-picker-container .fp-hide{display:none}.fp-picker-container .fp-picker-wrapper{background-color:#fff;box-shadow:0 2px 3px rgba(0,0,0,.2);border:1px solid;border-radius:5px;padding:.5em 0;position:absolute;top:24px}.fp-picker-container .fp-picker-wrapper span{position:relative;text-align:center;cursor:pointer}.fp-picker-container .fp-picker-wrapper span:hover{transform-origin:center center;background-color:#fff;box-shadow:0 0 5px;z-index:2;width:1em;height:1em;transform:translate(50%,50%) scale(3)}"]
            }] }
];
/** @nocollapse */
LnFontPickerComponent.ctorParameters = () => [];
LnFontPickerComponent.propDecorators = {
    listItems: [{ type: Input, args: ['listItems',] }],
    fontFamily: [{ type: Input, args: ['fontFamily',] }],
    closeOnSelect: [{ type: Input, args: ['closeOnSelect',] }],
    onSelect: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/linup-font-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LinupFontPickerModule {
}
LinupFontPickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LinupFontPickerComponent, LnFontPickerComponent],
                imports: [
                    CommonModule
                ],
                exports: [LinupFontPickerComponent, LnFontPickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: linup-font-picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LinupFontPickerService, LinupFontPickerComponent, SelectedItem, LnFontPickerComponent, LinupFontPickerModule };

//# sourceMappingURL=linup-font-picker.js.map