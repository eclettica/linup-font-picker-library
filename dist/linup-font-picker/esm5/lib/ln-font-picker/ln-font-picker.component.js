/**
 * @fileoverview added by tsickle
 * Generated from: lib/ln-font-picker/ln-font-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var LnFontPickerComponent = /** @class */ (function () {
    function LnFontPickerComponent() {
        this.onSelect = new EventEmitter();
        this.arePickerShown = false;
        console.log('ln-font-picker-component constructor');
    }
    /**
     * @return {?}
     */
    LnFontPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.listItems) {
            this.listItems = [];
            for (var i = 65; i < 123; i++) {
                if (i >= 91 && i <= 96)
                    continue;
                this.listItems.push(String.fromCharCode(i));
            }
        }
        if (this.closeOnSelect == undefined || this.closeOnSelect == null)
            this.closeOnSelect = true;
    };
    /**
     * @return {?}
     */
    LnFontPickerComponent.prototype.togglePicker = /**
     * @return {?}
     */
    function () {
        this.arePickerShown = !this.arePickerShown;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    LnFontPickerComponent.prototype.itemCliecked = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        console.log('item clicked...', item);
        this.onSelect.emit({ fontFamily: this.fontFamily, value: item });
        if (this.closeOnSelect && this.closeOnSelect == true)
            this.arePickerShown = false;
    };
    LnFontPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ln-font-picker',
                    template: "<div class=\"fp-picker-container\" [ngClass]=\"{'fp-open': arePickerShown}\">\n  <div class=\"fp-picker\" (click)=\"togglePicker()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n      <path\n        d=\"M27.951,10.997c-0.105-0.322-0.365-0.569-0.692-0.657l-7.303-1.956l-4.117-6.341c-0.369-0.568-1.309-0.568-1.678,0 l-4.117,6.341L2.741,10.34c-0.327,0.087-0.587,0.334-0.692,0.657c-0.104,0.322-0.039,0.675,0.174,0.938l4.759,5.875l-0.396,7.55 c-0.018,0.338,0.137,0.662,0.411,0.861c0.274,0.2,0.63,0.245,0.946,0.125L15,23.636l7.058,2.71c0.116,0.044,0.237,0.066,0.358,0.066 c0.208,0,0.415-0.065,0.588-0.191c0.274-0.199,0.429-0.523,0.411-0.861l-0.396-7.55l4.759-5.875 C27.99,11.672,28.056,11.319,27.951,10.997z M19,16h-3v3c0,0.553-0.447,1-1,1s-1-0.447-1-1v-3h-3c-0.553,0-1-0.447-1-1s0.447-1,1-1 h3v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3h3c0.553,0,1,0.447,1,1S19.553,16,19,16z\">\n      </path>\n    </svg>\n  </div>\n  <div #container>\n    <div [ngClass]=\"{'fp-hide': !arePickerShown}\" class=\"fp-popup fp-picker-wrapper\"\n      [ngStyle]=\"{'font-family': fontFamily}\">\n      <span *ngFor=\"let item of listItems\" (click)=\"itemCliecked(item)\">\n        {{item}}\n      </span>\n    </div>\n  </div>\n</div>\n",
                    styles: [".fp-picker-container{position:relative}.fp-picker-container .fp-picker{position:relative;display:inline-block;margin-left:10px;border-radius:3px;height:24px;width:24px}.fp-picker-container .fp-popup{position:relative;width:200px;height:200px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr}.fp-picker-container .fp-hide{display:none}.fp-picker-container .fp-picker-wrapper{background-color:#fff;box-shadow:0 2px 3px rgba(0,0,0,.2);border:1px solid;border-radius:5px;padding:.5em 0;position:absolute;top:24px}.fp-picker-container .fp-picker-wrapper span{position:relative;text-align:center;cursor:pointer}.fp-picker-container .fp-picker-wrapper span:hover{transform-origin:center center;background-color:#fff;box-shadow:0 0 5px;z-index:2;width:1em;height:1em;transform:translate(50%,50%) scale(3)}"]
                }] }
    ];
    /** @nocollapse */
    LnFontPickerComponent.ctorParameters = function () { return []; };
    LnFontPickerComponent.propDecorators = {
        listItems: [{ type: Input, args: ['listItems',] }],
        fontFamily: [{ type: Input, args: ['fontFamily',] }],
        closeOnSelect: [{ type: Input, args: ['closeOnSelect',] }],
        onSelect: [{ type: Output }]
    };
    return LnFontPickerComponent;
}());
export { LnFontPickerComponent };
if (false) {
    /** @type {?} */
    LnFontPickerComponent.prototype.listItems;
    /** @type {?} */
    LnFontPickerComponent.prototype.fontFamily;
    /** @type {?} */
    LnFontPickerComponent.prototype.closeOnSelect;
    /** @type {?} */
    LnFontPickerComponent.prototype.onSelect;
    /** @type {?} */
    LnFontPickerComponent.prototype.arePickerShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG4tZm9udC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGludXAtZm9udC1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvbG4tZm9udC1waWNrZXIvbG4tZm9udC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQXNCRTtRQUxBLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUc1QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUc5QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDcEIsU0FBUztnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjtRQUVELElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBRTlCLENBQUM7Ozs7SUFFRCw0Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsOHRDQUE4Qzs7aUJBRS9DOzs7Ozs0QkFHRSxLQUFLLFNBQUMsV0FBVzs2QkFHakIsS0FBSyxTQUFDLFlBQVk7Z0NBR2xCLEtBQUssU0FBQyxlQUFlOzJCQUdyQixNQUFNOztJQW9DVCw0QkFBQztDQUFBLEFBcERELElBb0RDO1NBL0NZLHFCQUFxQjs7O0lBRWhDLDBDQUMwQjs7SUFFMUIsMkNBQ29COztJQUVwQiw4Q0FDd0I7O0lBRXhCLHlDQUM0Qzs7SUFHNUMsK0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0ZWRJdGVtIH0gZnJvbSAnLi4vc2VsZWN0ZWQtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xuLWZvbnQtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xuLWZvbnQtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG4tZm9udC1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMbkZvbnRQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnbGlzdEl0ZW1zJylcbiAgbGlzdEl0ZW1zITogQXJyYXk8c3RyaW5nPjtcblxuICBASW5wdXQoJ2ZvbnRGYW1pbHknKVxuICBmb250RmFtaWx5ITogc3RyaW5nO1xuXG4gIEBJbnB1dCgnY2xvc2VPblNlbGVjdCcpXG4gIGNsb3NlT25TZWxlY3QhOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0ZWRJdGVtPigpO1xuXG5cbiAgYXJlUGlja2VyU2hvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnbG4tZm9udC1waWNrZXItY29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdEl0ZW1zKSB7XG4gICAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDY1OyBpIDwgMTIzOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPj0gOTEgJiYgaSA8PSA5NilcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLmNsb3NlT25TZWxlY3QgPT0gdW5kZWZpbmVkIHx8IHRoaXMuY2xvc2VPblNlbGVjdCA9PSBudWxsKVxuICAgICAgdGhpcy5jbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcblxuICB9XG5cbiAgdG9nZ2xlUGlja2VyKCkge1xuICAgIHRoaXMuYXJlUGlja2VyU2hvd24gPSAhdGhpcy5hcmVQaWNrZXJTaG93bjtcbiAgfVxuXG4gIGl0ZW1DbGllY2tlZChpdGVtOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygnaXRlbSBjbGlja2VkLi4uJywgaXRlbSk7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHtmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHksIHZhbHVlOiBpdGVtfSk7XG4gICAgaWYodGhpcy5jbG9zZU9uU2VsZWN0ICYmIHRoaXMuY2xvc2VPblNlbGVjdCA9PSB0cnVlKVxuICAgICAgdGhpcy5hcmVQaWNrZXJTaG93biA9IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==