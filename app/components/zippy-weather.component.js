System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ZippyWeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyWeatherComponent = (function () {
                function ZippyWeatherComponent() {
                    this.isExpanded = true;
                }
                ZippyWeatherComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyWeatherComponent.prototype, "heading", void 0);
                ZippyWeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy-weather',
                        template: "\n            \n    <div class=\"col-md-3\">\n    <div class=\"zippy\">\n        <div\n            class=\"zippy-heading\"\n            (click)=\"toggle()\">    \n            {{ heading }}\n        <i \n            class=\"pull-right glyphicon\"\n            [ngClass]=\"\n                {\n                    'glyphicon-chevron-down': !isExpanded,\n                    'glyphicon-chevron-up': !isExpanded\n                }\">\n        </i>\n        </div>\n        <div *ngIf=\"isExpanded\" class=\"zippy-content\">\n\n        <div class=\"media\">\n        <div class=\"media-middle\">\n            <iframe \n                class=\"media-object\" src=\"http://www.lekkerit.com/content/6.php/weather.php\" width=\"600\" height=\"325\" frameborder=\"0\" allowfullscreen>\n            </iframe>\n                <a href=\"http://www.lekkerit.com/content/6.php/weather.php\" target=\"_blank\" class=\"btn btn-primary\">Check out the weather!</a>\n\n        </div>\n        </div>\n        <ng-content></ng-content>\n        </div>\n    </div>\n    </div>\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyWeatherComponent);
                return ZippyWeatherComponent;
            }());
            exports_1("ZippyWeatherComponent", ZippyWeatherComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwcHktd2VhdGhlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6aXBweS13ZWF0aGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVDQTtnQkFBQTtvQkFFRyxlQUFVLEdBQUcsSUFBSSxDQUFDO2dCQU9yQixDQUFDO2dCQUhHLHNDQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBSkY7b0JBQUMsWUFBSyxFQUFFOztzRUFBQTtnQkF6Q1g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLDRpQ0FnQ0w7cUJBQ1IsQ0FBQzs7eUNBQUE7Z0JBV0YsNEJBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQVRELHlEQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ppcHB5LXdlYXRoZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ6aXBweS1oZWFkaW5nXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+ICAgIFxyXG4gICAgICAgICAgICB7eyBoZWFkaW5nIH19XHJcbiAgICAgICAgPGkgXHJcbiAgICAgICAgICAgIGNsYXNzPVwicHVsbC1yaWdodCBnbHlwaGljb25cIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAnZ2x5cGhpY29uLWNoZXZyb24tZG93bic6ICFpc0V4cGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICdnbHlwaGljb24tY2hldnJvbi11cCc6ICFpc0V4cGFuZGVkXHJcbiAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0V4cGFuZGVkXCIgY2xhc3M9XCJ6aXBweS1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGlmcmFtZSBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiaHR0cDovL3d3dy5sZWtrZXJpdC5jb20vY29udGVudC82LnBocC93ZWF0aGVyLnBocFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiMzI1XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPlxyXG4gICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmxla2tlcml0LmNvbS9jb250ZW50LzYucGhwL3dlYXRoZXIucGhwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5DaGVjayBvdXQgdGhlIHdlYXRoZXIhPC9hPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIGAsICAgICAgICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBaaXBweVdlYXRoZXJDb21wb25lbnQgIHsgXHJcbiAgIFxyXG4gICBpc0V4cGFuZGVkID0gdHJ1ZTtcclxuXHJcbiAgIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSAhdGhpcy5pc0V4cGFuZGVkO1xyXG4gICAgfVxyXG59Il19