import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LnFontPickerComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function LnFontPickerComponent_span_7_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); var item_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.itemCliecked(item_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r2, " ");
} }
var _c0 = function (a0) { return { "fp-open": a0 }; };
var _c1 = function (a0) { return { "fp-hide": a0 }; };
var _c2 = function (a0) { return { "font-family": a0 }; };
var LnFontPickerComponent = /** @class */ (function () {
    function LnFontPickerComponent() {
        this.onSelect = new EventEmitter();
        this.arePickerShown = false;
        console.log('ln-font-picker-component constructor');
    }
    LnFontPickerComponent.prototype.ngOnInit = function () {
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
    LnFontPickerComponent.prototype.togglePicker = function () {
        this.arePickerShown = !this.arePickerShown;
    };
    LnFontPickerComponent.prototype.itemCliecked = function (item) {
        console.log('item clicked...', item);
        this.onSelect.emit({ fontFamily: this.fontFamily, value: item });
        if (this.closeOnSelect && this.closeOnSelect == true)
            this.arePickerShown = false;
    };
    LnFontPickerComponent.ɵfac = function LnFontPickerComponent_Factory(t) { return new (t || LnFontPickerComponent)(); };
    LnFontPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LnFontPickerComponent, selectors: [["ln-font-picker"]], inputs: { listItems: "listItems", fontFamily: "fontFamily", closeOnSelect: "closeOnSelect" }, outputs: { onSelect: "onSelect" }, decls: 8, vars: 10, consts: [[1, "fp-picker-container", 3, "ngClass"], [1, "fp-picker", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 30 30"], ["d", "M27.951,10.997c-0.105-0.322-0.365-0.569-0.692-0.657l-7.303-1.956l-4.117-6.341c-0.369-0.568-1.309-0.568-1.678,0 l-4.117,6.341L2.741,10.34c-0.327,0.087-0.587,0.334-0.692,0.657c-0.104,0.322-0.039,0.675,0.174,0.938l4.759,5.875l-0.396,7.55 c-0.018,0.338,0.137,0.662,0.411,0.861c0.274,0.2,0.63,0.245,0.946,0.125L15,23.636l7.058,2.71c0.116,0.044,0.237,0.066,0.358,0.066 c0.208,0,0.415-0.065,0.588-0.191c0.274-0.199,0.429-0.523,0.411-0.861l-0.396-7.55l4.759-5.875 C27.99,11.672,28.056,11.319,27.951,10.997z M19,16h-3v3c0,0.553-0.447,1-1,1s-1-0.447-1-1v-3h-3c-0.553,0-1-0.447-1-1s0.447-1,1-1 h3v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3h3c0.553,0,1,0.447,1,1S19.553,16,19,16z"], ["container", ""], [1, "fp-popup", "fp-picker-wrapper", 3, "ngClass", "ngStyle"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function LnFontPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵlistener("click", function LnFontPickerComponent_Template_div_click_1_listener() { return ctx.togglePicker(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 2);
            i0.ɵɵelement(3, "path", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", null, 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, LnFontPickerComponent_span_7_Template, 2, 1, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.arePickerShown));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, !ctx.arePickerShown))("ngStyle", i0.ɵɵpureFunction1(8, _c2, ctx.fontFamily));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.listItems);
        } }, directives: [i1.NgClass, i1.NgStyle, i1.NgForOf], styles: [".fp-picker-container[_ngcontent-%COMP%]{position:relative}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker[_ngcontent-%COMP%]{position:relative;display:inline-block;margin-left:10px;border-radius:3px;height:24px;width:24px}.fp-picker-container[_ngcontent-%COMP%]   .fp-popup[_ngcontent-%COMP%]{position:relative;width:200px;height:200px;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr}.fp-picker-container[_ngcontent-%COMP%]   .fp-hide[_ngcontent-%COMP%]{display:none}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 3px rgba(0,0,0,.2);border:1px solid;border-radius:5px;padding:.5em 0;position:absolute;top:24px}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;text-align:center;cursor:pointer}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{transform-origin:center center;background-color:#fff;box-shadow:0 0 5px;z-index:2;width:1em;height:1em;transform:translate(50%,50%) scale(3)}"] });
    return LnFontPickerComponent;
}());
export { LnFontPickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LnFontPickerComponent, [{
        type: Component,
        args: [{
                selector: 'ln-font-picker',
                templateUrl: './ln-font-picker.component.html',
                styleUrls: ['./ln-font-picker.component.scss']
            }]
    }], function () { return []; }, { listItems: [{
            type: Input,
            args: ['listItems']
        }], fontFamily: [{
            type: Input,
            args: ['fontFamily']
        }], closeOnSelect: [{
            type: Input,
            args: ['closeOnSelect']
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG4tZm9udC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGludXAtZm9udC1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvbG4tZm9udC1waWNrZXIvbG4tZm9udC1waWNrZXIuY29tcG9uZW50LnRzIiwibGliL2xuLWZvbnQtcGlja2VyL2xuLWZvbnQtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDV3pFLCtCQUNFO0lBRG1DLDROQUE0QjtJQUMvRCxZQUNGO0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSx3Q0FDRjs7Ozs7QURWTjtJQXNCRTtRQUxBLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUc1QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUc5QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ3BCLFNBQVM7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUU5QixDQUFDO0lBRUQsNENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsSUFBWTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDL0QsSUFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzhGQTdDVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1JsQyw4QkFDRTtZQUFBLDhCQUNFO1lBRHFCLCtGQUFTLGtCQUFjLElBQUM7WUFDN0MsbUJBQ0U7WUFERiw4QkFDRTtZQUFBLDBCQUVPO1lBQ1QsaUJBQU07WUFDUixpQkFBTTtZQUNOLG9CQUNFO1lBREYsb0NBQ0U7WUFBQSw4QkFFRTtZQUFBLHdFQUNFO1lBRUosaUJBQU07WUFDUixpQkFBTTtZQUNSLGlCQUFNOztZQWhCMkIsd0VBQXVDO1lBUy9ELGVBQXdDO1lBQXhDLHlFQUF3Qyx1REFBQTtZQUVyQyxlQUE4QjtZQUE5Qix1Q0FBOEI7O2dDRFgxQztDQXVEQyxBQXBERCxJQW9EQztTQS9DWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7O2tCQUdFLEtBQUs7bUJBQUMsV0FBVzs7a0JBR2pCLEtBQUs7bUJBQUMsWUFBWTs7a0JBR2xCLEtBQUs7bUJBQUMsZUFBZTs7a0JBR3JCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RlZEl0ZW0gfSBmcm9tICcuLi9zZWxlY3RlZC1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG4tZm9udC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG4tZm9udC1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sbi1mb250LXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExuRm9udFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdsaXN0SXRlbXMnKVxuICBsaXN0SXRlbXMhOiBBcnJheTxzdHJpbmc+O1xuXG4gIEBJbnB1dCgnZm9udEZhbWlseScpXG4gIGZvbnRGYW1pbHkhOiBzdHJpbmc7XG5cbiAgQElucHV0KCdjbG9zZU9uU2VsZWN0JylcbiAgY2xvc2VPblNlbGVjdCE6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3RlZEl0ZW0+KCk7XG5cblxuICBhcmVQaWNrZXJTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdsbi1mb250LXBpY2tlci1jb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0SXRlbXMpIHtcbiAgICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgICBmb3IgKGxldCBpID0gNjU7IGkgPCAxMjM7IGkrKykge1xuICAgICAgICBpZiAoaSA+PSA5MSAmJiBpIDw9IDk2KVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMuY2xvc2VPblNlbGVjdCA9PSB1bmRlZmluZWQgfHwgdGhpcy5jbG9zZU9uU2VsZWN0ID09IG51bGwpXG4gICAgICB0aGlzLmNsb3NlT25TZWxlY3QgPSB0cnVlO1xuXG4gIH1cblxuICB0b2dnbGVQaWNrZXIoKSB7XG4gICAgdGhpcy5hcmVQaWNrZXJTaG93biA9ICF0aGlzLmFyZVBpY2tlclNob3duO1xuICB9XG5cbiAgaXRlbUNsaWVja2VkKGl0ZW06IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdpdGVtIGNsaWNrZWQuLi4nLCBpdGVtKTtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoe2ZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseSwgdmFsdWU6IGl0ZW19KTtcbiAgICBpZih0aGlzLmNsb3NlT25TZWxlY3QgJiYgdGhpcy5jbG9zZU9uU2VsZWN0ID09IHRydWUpXG4gICAgICB0aGlzLmFyZVBpY2tlclNob3duID0gZmFsc2U7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZwLXBpY2tlci1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J2ZwLW9wZW4nOiBhcmVQaWNrZXJTaG93bn1cIj5cbiAgPGRpdiBjbGFzcz1cImZwLXBpY2tlclwiIChjbGljayk9XCJ0b2dnbGVQaWNrZXIoKVwiPlxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjcuOTUxLDEwLjk5N2MtMC4xMDUtMC4zMjItMC4zNjUtMC41NjktMC42OTItMC42NTdsLTcuMzAzLTEuOTU2bC00LjExNy02LjM0MWMtMC4zNjktMC41NjgtMS4zMDktMC41NjgtMS42NzgsMCBsLTQuMTE3LDYuMzQxTDIuNzQxLDEwLjM0Yy0wLjMyNywwLjA4Ny0wLjU4NywwLjMzNC0wLjY5MiwwLjY1N2MtMC4xMDQsMC4zMjItMC4wMzksMC42NzUsMC4xNzQsMC45MzhsNC43NTksNS44NzVsLTAuMzk2LDcuNTUgYy0wLjAxOCwwLjMzOCwwLjEzNywwLjY2MiwwLjQxMSwwLjg2MWMwLjI3NCwwLjIsMC42MywwLjI0NSwwLjk0NiwwLjEyNUwxNSwyMy42MzZsNy4wNTgsMi43MWMwLjExNiwwLjA0NCwwLjIzNywwLjA2NiwwLjM1OCwwLjA2NiBjMC4yMDgsMCwwLjQxNS0wLjA2NSwwLjU4OC0wLjE5MWMwLjI3NC0wLjE5OSwwLjQyOS0wLjUyMywwLjQxMS0wLjg2MWwtMC4zOTYtNy41NWw0Ljc1OS01Ljg3NSBDMjcuOTksMTEuNjcyLDI4LjA1NiwxMS4zMTksMjcuOTUxLDEwLjk5N3ogTTE5LDE2aC0zdjNjMCwwLjU1My0wLjQ0NywxLTEsMXMtMS0wLjQ0Ny0xLTF2LTNoLTNjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFzMC40NDctMSwxLTEgaDN2LTNjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYzaDNjMC41NTMsMCwxLDAuNDQ3LDEsMVMxOS41NTMsMTYsMTksMTZ6XCI+XG4gICAgICA8L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2ICNjb250YWluZXI+XG4gICAgPGRpdiBbbmdDbGFzc109XCJ7J2ZwLWhpZGUnOiAhYXJlUGlja2VyU2hvd259XCIgY2xhc3M9XCJmcC1wb3B1cCBmcC1waWNrZXItd3JhcHBlclwiXG4gICAgICBbbmdTdHlsZV09XCJ7J2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseX1cIj5cbiAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJpdGVtQ2xpZWNrZWQoaXRlbSlcIj5cbiAgICAgICAge3tpdGVtfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==