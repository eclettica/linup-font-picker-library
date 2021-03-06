(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('linup-font-picker', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['linup-font-picker'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, i1) { 'use strict';

    var LinupFontPickerService = /** @class */ (function () {
        function LinupFontPickerService() {
        }
        return LinupFontPickerService;
    }());
    LinupFontPickerService.ɵfac = function LinupFontPickerService_Factory(t) { return new (t || LinupFontPickerService)(); };
    LinupFontPickerService.ɵprov = i0.ɵɵdefineInjectable({ token: LinupFontPickerService, factory: LinupFontPickerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LinupFontPickerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    function LnFontPickerComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 7);
            i0.ɵɵlistener("click", function LnFontPickerComponent_span_7_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var item_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.itemCliecked(item_r2); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", item_r2, " ");
        }
    }
    var _c0 = function (a0) { return { "fp-open": a0 }; };
    var _c1 = function (a0) { return { "fp-hide": a0 }; };
    var _c2 = function (a0) { return { "font-family": a0 }; };
    var LnFontPickerComponent = /** @class */ (function () {
        function LnFontPickerComponent() {
            this.onSelect = new i0.EventEmitter();
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
        return LnFontPickerComponent;
    }());
    LnFontPickerComponent.ɵfac = function LnFontPickerComponent_Factory(t) { return new (t || LnFontPickerComponent)(); };
    LnFontPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LnFontPickerComponent, selectors: [["ln-font-picker"]], inputs: { listItems: "listItems", fontFamily: "fontFamily", closeOnSelect: "closeOnSelect" }, outputs: { onSelect: "onSelect" }, decls: 8, vars: 10, consts: [[1, "fp-picker-container", 3, "ngClass"], [1, "fp-picker", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 30 30"], ["d", "M27.951,10.997c-0.105-0.322-0.365-0.569-0.692-0.657l-7.303-1.956l-4.117-6.341c-0.369-0.568-1.309-0.568-1.678,0 l-4.117,6.341L2.741,10.34c-0.327,0.087-0.587,0.334-0.692,0.657c-0.104,0.322-0.039,0.675,0.174,0.938l4.759,5.875l-0.396,7.55 c-0.018,0.338,0.137,0.662,0.411,0.861c0.274,0.2,0.63,0.245,0.946,0.125L15,23.636l7.058,2.71c0.116,0.044,0.237,0.066,0.358,0.066 c0.208,0,0.415-0.065,0.588-0.191c0.274-0.199,0.429-0.523,0.411-0.861l-0.396-7.55l4.759-5.875 C27.99,11.672,28.056,11.319,27.951,10.997z M19,16h-3v3c0,0.553-0.447,1-1,1s-1-0.447-1-1v-3h-3c-0.553,0-1-0.447-1-1s0.447-1,1-1 h3v-3c0-0.553,0.447-1,1-1s1,0.447,1,1v3h3c0.553,0,1,0.447,1,1S19.553,16,19,16z"], ["container", ""], [1, "fp-popup", "fp-picker-wrapper", 3, "ngClass", "ngStyle"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function LnFontPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx.arePickerShown));
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, !ctx.arePickerShown))("ngStyle", i0.ɵɵpureFunction1(8, _c2, ctx.fontFamily));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.listItems);
            }
        }, directives: [i1.NgClass, i1.NgStyle, i1.NgForOf], styles: [".fp-picker-container[_ngcontent-%COMP%]{position:relative}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker[_ngcontent-%COMP%]{border-radius:3px;display:inline-block;height:24px;margin-left:10px;position:relative;width:24px}.fp-picker-container[_ngcontent-%COMP%]   .fp-popup[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;height:200px;overflow-y:auto;position:relative;width:200px}.fp-picker-container[_ngcontent-%COMP%]   .fp-hide[_ngcontent-%COMP%]{display:none}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]{background-color:#fff;border:1px solid;border-radius:5px;box-shadow:0 2px 3px rgba(0,0,0,.2);padding:.5em 0;position:absolute;top:24px}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;position:relative;text-align:center}.fp-picker-container[_ngcontent-%COMP%]   .fp-picker-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background-color:#fff;box-shadow:0 0 5px;height:1em;transform:translate(50%,50%) scale(3);transform-origin:center center;width:1em;z-index:2}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LnFontPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ln-font-picker',
                        templateUrl: './ln-font-picker.component.html',
                        styleUrls: ['./ln-font-picker.component.scss']
                    }]
            }], function () { return []; }, { listItems: [{
                    type: i0.Input,
                    args: ['listItems']
                }], fontFamily: [{
                    type: i0.Input,
                    args: ['fontFamily']
                }], closeOnSelect: [{
                    type: i0.Input,
                    args: ['closeOnSelect']
                }], onSelect: [{
                    type: i0.Output
                }] });
    })();

    var LinupFontPickerComponent = /** @class */ (function () {
        function LinupFontPickerComponent() {
        }
        LinupFontPickerComponent.prototype.ngOnInit = function () {
        };
        return LinupFontPickerComponent;
    }());
    LinupFontPickerComponent.ɵfac = function LinupFontPickerComponent_Factory(t) { return new (t || LinupFontPickerComponent)(); };
    LinupFontPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LinupFontPickerComponent, selectors: [["linup-font-picker"]], decls: 1, vars: 0, template: function LinupFontPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "ln-font-picker");
            }
        }, directives: [LnFontPickerComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LinupFontPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'linup-font-picker',
                        template: "\n    <ln-font-picker>\n    </ln-font-picker>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var SelectedItem = /** @class */ (function () {
        function SelectedItem() {
        }
        return SelectedItem;
    }());

    var LinupFontPickerModule = /** @class */ (function () {
        function LinupFontPickerModule() {
        }
        return LinupFontPickerModule;
    }());
    LinupFontPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: LinupFontPickerModule });
    LinupFontPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LinupFontPickerModule_Factory(t) { return new (t || LinupFontPickerModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LinupFontPickerModule, { declarations: [LinupFontPickerComponent, LnFontPickerComponent], imports: [i1.CommonModule], exports: [LinupFontPickerComponent, LnFontPickerComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LinupFontPickerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [LinupFontPickerComponent, LnFontPickerComponent],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [LinupFontPickerComponent, LnFontPickerComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of linup-font-picker
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LinupFontPickerComponent = LinupFontPickerComponent;
    exports.LinupFontPickerModule = LinupFontPickerModule;
    exports.LinupFontPickerService = LinupFontPickerService;
    exports.LnFontPickerComponent = LnFontPickerComponent;
    exports.SelectedItem = SelectedItem;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=linup-font-picker.umd.js.map
