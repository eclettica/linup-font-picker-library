import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LnFontPickerComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function LnFontPickerComponent_span_7_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const item_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.itemCliecked(item_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r2, " ");
} }
const _c0 = function (a0) { return { "fp-open": a0 }; };
const _c1 = function (a0) { return { "fp-hide": a0 }; };
const _c2 = function (a0) { return { "font-family": a0 }; };
export class LnFontPickerComponent {
    constructor() {
        this.onSelect = new EventEmitter();
        this.arePickerShown = false;
        console.log('ln-font-picker-component constructor');
    }
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
    togglePicker() {
        this.arePickerShown = !this.arePickerShown;
    }
    itemCliecked(item) {
        console.log('item clicked...', item);
        this.onSelect.emit({ fontFamily: this.fontFamily, value: item });
        if (this.closeOnSelect && this.closeOnSelect == true)
            this.arePickerShown = false;
    }
}
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
    } }, directives: [i1.NgClass, i1.NgStyle, i1.NgForOf], styles: [".fp-picker-container[_ngcontent-%COMP%]{position:relative}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker[_ngcontent-%COMP%]{border-radius:3px;display:inline-block;height:24px;margin-left:10px;position:relative;width:24px}.fp-picker-container[_ngcontent-%COMP%]   .fp-popup[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;height:200px;overflow-y:auto;position:relative;width:200px}.fp-picker-container[_ngcontent-%COMP%]   .fp-hide[_ngcontent-%COMP%]{display:none}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]{background-color:#fff;border:1px solid;border-radius:5px;box-shadow:0 2px 3px rgba(0,0,0,.2);padding:.5em 0;position:absolute;top:24px}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;position:relative;text-align:center}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background-color:#fff;box-shadow:0 0 5px;height:1em;transform:translate(50%,50%) scale(3);transform-origin:center center;width:1em;z-index:2}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG4tZm9udC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2xpbnVwLWZvbnQtcGlja2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9sbi1mb250LXBpY2tlci9sbi1mb250LXBpY2tlci5jb21wb25lbnQudHMiLCJsaWIvbG4tZm9udC1waWNrZXIvbG4tZm9udC1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNXekUsK0JBQ0U7SUFEbUMsZ09BQTRCO0lBQy9ELFlBQ0Y7SUFBQSxpQkFBTzs7O0lBREwsZUFDRjtJQURFLHdDQUNGOzs7OztBRExOLE1BQU0sT0FBTyxxQkFBcUI7SUFpQmhDO1FBTEEsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRzVDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDcEIsU0FBUztnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjtRQUVELElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBRTlCLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7OzBGQTdDVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1JsQyw4QkFDRTtRQUFBLDhCQUNFO1FBRHFCLCtGQUFTLGtCQUFjLElBQUM7UUFDN0MsbUJBQ0U7UUFERiw4QkFDRTtRQUFBLDBCQUVPO1FBQ1QsaUJBQU07UUFDUixpQkFBTTtRQUNOLG9CQUNFO1FBREYsb0NBQ0U7UUFBQSw4QkFFRTtRQUFBLHdFQUVPO1FBQ1QsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQWhCMkIsd0VBQXVDO1FBUy9ELGVBQXdDO1FBQXhDLHlFQUF3Qyx1REFBQTtRQUVwQixlQUFZO1FBQVosdUNBQVk7O2tEREg1QixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO3NDQUlDLFNBQVM7a0JBRFIsS0FBSzttQkFBQyxXQUFXO1lBSWxCLFVBQVU7a0JBRFQsS0FBSzttQkFBQyxZQUFZO1lBSW5CLGFBQWE7a0JBRFosS0FBSzttQkFBQyxlQUFlO1lBSXRCLFFBQVE7a0JBRFAsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGVkSXRlbSB9IGZyb20gJy4uL3NlbGVjdGVkLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsbi1mb250LXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sbi1mb250LXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xuLWZvbnQtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG5Gb250UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ2xpc3RJdGVtcycpXG4gIGxpc3RJdGVtcyE6IEFycmF5PHN0cmluZz47XG5cbiAgQElucHV0KCdmb250RmFtaWx5JylcbiAgZm9udEZhbWlseSE6IHN0cmluZztcblxuICBASW5wdXQoJ2Nsb3NlT25TZWxlY3QnKVxuICBjbG9zZU9uU2VsZWN0ITogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdGVkSXRlbT4oKTtcblxuXG4gIGFyZVBpY2tlclNob3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2xuLWZvbnQtcGlja2VyLWNvbXBvbmVudCBjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RJdGVtcykge1xuICAgICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSA2NTsgaSA8IDEyMzsgaSsrKSB7XG4gICAgICAgIGlmIChpID49IDkxICYmIGkgPD0gOTYpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5jbG9zZU9uU2VsZWN0ID09IHVuZGVmaW5lZCB8fCB0aGlzLmNsb3NlT25TZWxlY3QgPT0gbnVsbClcbiAgICAgIHRoaXMuY2xvc2VPblNlbGVjdCA9IHRydWU7XG5cbiAgfVxuXG4gIHRvZ2dsZVBpY2tlcigpIHtcbiAgICB0aGlzLmFyZVBpY2tlclNob3duID0gIXRoaXMuYXJlUGlja2VyU2hvd247XG4gIH1cblxuICBpdGVtQ2xpZWNrZWQoaXRlbTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ2l0ZW0gY2xpY2tlZC4uLicsIGl0ZW0pO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7Zm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LCB2YWx1ZTogaXRlbX0pO1xuICAgIGlmKHRoaXMuY2xvc2VPblNlbGVjdCAmJiB0aGlzLmNsb3NlT25TZWxlY3QgPT0gdHJ1ZSlcbiAgICAgIHRoaXMuYXJlUGlja2VyU2hvd24gPSBmYWxzZTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZnAtcGlja2VyLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsnZnAtb3Blbic6IGFyZVBpY2tlclNob3dufVwiPlxuICA8ZGl2IGNsYXNzPVwiZnAtcGlja2VyXCIgKGNsaWNrKT1cInRvZ2dsZVBpY2tlcigpXCI+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNy45NTEsMTAuOTk3Yy0wLjEwNS0wLjMyMi0wLjM2NS0wLjU2OS0wLjY5Mi0wLjY1N2wtNy4zMDMtMS45NTZsLTQuMTE3LTYuMzQxYy0wLjM2OS0wLjU2OC0xLjMwOS0wLjU2OC0xLjY3OCwwIGwtNC4xMTcsNi4zNDFMMi43NDEsMTAuMzRjLTAuMzI3LDAuMDg3LTAuNTg3LDAuMzM0LTAuNjkyLDAuNjU3Yy0wLjEwNCwwLjMyMi0wLjAzOSwwLjY3NSwwLjE3NCwwLjkzOGw0Ljc1OSw1Ljg3NWwtMC4zOTYsNy41NSBjLTAuMDE4LDAuMzM4LDAuMTM3LDAuNjYyLDAuNDExLDAuODYxYzAuMjc0LDAuMiwwLjYzLDAuMjQ1LDAuOTQ2LDAuMTI1TDE1LDIzLjYzNmw3LjA1OCwyLjcxYzAuMTE2LDAuMDQ0LDAuMjM3LDAuMDY2LDAuMzU4LDAuMDY2IGMwLjIwOCwwLDAuNDE1LTAuMDY1LDAuNTg4LTAuMTkxYzAuMjc0LTAuMTk5LDAuNDI5LTAuNTIzLDAuNDExLTAuODYxbC0wLjM5Ni03LjU1bDQuNzU5LTUuODc1IEMyNy45OSwxMS42NzIsMjguMDU2LDExLjMxOSwyNy45NTEsMTAuOTk3eiBNMTksMTZoLTN2M2MwLDAuNTUzLTAuNDQ3LDEtMSwxcy0xLTAuNDQ3LTEtMXYtM2gtM2MtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMSBoM3YtM2MwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjNoM2MwLjU1MywwLDEsMC40NDcsMSwxUzE5LjU1MywxNiwxOSwxNnpcIj5cbiAgICAgIDwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4gIDxkaXYgI2NvbnRhaW5lcj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnZnAtaGlkZSc6ICFhcmVQaWNrZXJTaG93bn1cIiBjbGFzcz1cImZwLXBvcHVwIGZwLXBpY2tlci13cmFwcGVyXCJcbiAgICAgIFtuZ1N0eWxlXT1cInsnZm9udC1mYW1pbHknOiBmb250RmFtaWx5fVwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIml0ZW1DbGllY2tlZChpdGVtKVwiPlxuICAgICAgICB7e2l0ZW19fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19