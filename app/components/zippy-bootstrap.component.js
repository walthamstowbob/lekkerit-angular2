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
    var ZippyBootstrapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyBootstrapComponent = (function () {
                function ZippyBootstrapComponent() {
                    this.isExpanded = true;
                }
                ZippyBootstrapComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyBootstrapComponent.prototype, "heading", void 0);
                ZippyBootstrapComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy-bootstrap',
                        template: "\n    \n    <div class=\"col-md-3\">\n    <div class=\"zippy\">\n        <div\n            class=\"zippy-heading\"\n            (click)=\"toggle()\">    \n            {{ heading }}\n        <i \n            class=\"pull-right glyphicon\"\n            [ngClass]=\"\n                {\n                    'glyphicon-chevron-down': !isExpanded,\n                    'glyphicon-chevron-up': !isExpanded\n                }\">\n        </i>\n        </div>\n        <div *ngIf=\"isExpanded\" class=\"zippy-content\">\n\n        <div class=\"media\">\n        <div class=\"media-middle\">\n            <iframe \n                class=\"media-object\" src=\"http://www.lekkerit.com\" width=\"600\" height=\"325\" frameborder=\"0\" allowfullscreen>\n            </iframe>\n                <a href=\"http://www.lekkerit.com\" target=\"_blank\" class=\"btn btn-primary\">Bootstrap</a>\n\n        </div>\n        </div>\n        <ng-content></ng-content>\n        </div>\n    </div>\n    </div>\n    \n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyBootstrapComponent);
                return ZippyBootstrapComponent;
            }());
            exports_1("ZippyBootstrapComponent", ZippyBootstrapComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwcHktYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInppcHB5LWJvb3RzdHJhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBQUE7b0JBRUcsZUFBVSxHQUFHLElBQUksQ0FBQztnQkFPckIsQ0FBQztnQkFIRyx3Q0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN2QyxDQUFDO2dCQUpGO29CQUFDLFlBQUssRUFBRTs7d0VBQUE7Z0JBMUNYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLHkrQkFpQ0w7cUJBQ1IsQ0FBQzs7MkNBQUE7Z0JBV0YsOEJBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQVRELDZEQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ppcHB5LWJvb3RzdHJhcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ6aXBweS1oZWFkaW5nXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+ICAgIFxyXG4gICAgICAgICAgICB7eyBoZWFkaW5nIH19XHJcbiAgICAgICAgPGkgXHJcbiAgICAgICAgICAgIGNsYXNzPVwicHVsbC1yaWdodCBnbHlwaGljb25cIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAnZ2x5cGhpY29uLWNoZXZyb24tZG93bic6ICFpc0V4cGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICdnbHlwaGljb24tY2hldnJvbi11cCc6ICFpc0V4cGFuZGVkXHJcbiAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0V4cGFuZGVkXCIgY2xhc3M9XCJ6aXBweS1jb250ZW50XCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1taWRkbGVcIj5cclxuICAgICAgICAgICAgPGlmcmFtZSBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiaHR0cDovL3d3dy5sZWtrZXJpdC5jb21cIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjMyNVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj5cclxuICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5sZWtrZXJpdC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkJvb3RzdHJhcDwvYT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIGAsICAgICAgICBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBaaXBweUJvb3RzdHJhcENvbXBvbmVudCAgeyBcclxuICAgXHJcbiAgIGlzRXhwYW5kZWQgPSB0cnVlO1xyXG5cclxuICAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG5cclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9ICF0aGlzLmlzRXhwYW5kZWQ7XHJcbiAgICB9XHJcbn0iXX0=