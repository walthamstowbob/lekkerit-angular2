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
    var ZippySmitonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippySmitonComponent = (function () {
                function ZippySmitonComponent() {
                    this.isExpanded = true;
                }
                ZippySmitonComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippySmitonComponent.prototype, "heading", void 0);
                ZippySmitonComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy-smiton',
                        template: "\n    \n        <div class=\"col-md-3\">\n            <div class=\"zippy\">\n            <div\n                class=\"zippy-heading\"\n                (click)=\"toggle()\">    \n                {{ heading }}\n            <i \n                class=\"pull-right glyphicon\"\n                [ngClass]=\"\n                    {\n                        'glyphicon-chevron-down': !isExpanded,\n                        'glyphicon-chevron-up': !isExpanded\n                    }\">\n            </i>\n            </div>\n                <div *ngIf=\"isExpanded\" class=\"zippy-content\">\n\n                <div class=\"media\">\n                <div class=\"media-middle\">\n                    <iframe \n                        class=\"media-object\" src=\"http://www.lewisluke.com\" width=\"600\" height=\"325\" frameborder=\"0\" allowfullscreen>\n                    </iframe>\n                        <a href=\"http://www.lewisluke.com/\" target=\"_blank\" class=\"btn btn-primary\">Portfolio page</a>\n\n                </div>\n                </div>\n                <ng-content></ng-content>\n            </div>\n            </div>\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippySmitonComponent);
                return ZippySmitonComponent;
            }());
            exports_1("ZippySmitonComponent", ZippySmitonComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwcHktc21pdG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInppcHB5LXNtaXRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBQUE7b0JBRUcsZUFBVSxHQUFHLElBQUksQ0FBQztnQkFPckIsQ0FBQztnQkFIRyxxQ0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN2QyxDQUFDO2dCQUpGO29CQUFDLFlBQUssRUFBRTs7cUVBQUE7Z0JBeENYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSwybkNBK0JMO3FCQUNSLENBQUM7O3dDQUFBO2dCQVdGLDJCQUFDO1lBQUQsQ0FBQyxBQVRELElBU0M7WUFURCx1REFTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd6aXBweS1zbWl0b24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiemlwcHlcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ6aXBweS1oZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiPiAgICBcclxuICAgICAgICAgICAgICAgIHt7IGhlYWRpbmcgfX1cclxuICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInB1bGwtcmlnaHQgZ2x5cGhpY29uXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dseXBoaWNvbi1jaGV2cm9uLWRvd24nOiAhaXNFeHBhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dseXBoaWNvbi1jaGV2cm9uLXVwJzogIWlzRXhwYW5kZWRcclxuICAgICAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFeHBhbmRlZFwiIGNsYXNzPVwiemlwcHktY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVkaWEtb2JqZWN0XCIgc3JjPVwiaHR0cDovL3d3dy5sZXdpc2x1a2UuY29tXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCIzMjVcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmxld2lzbHVrZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Qb3J0Zm9saW8gcGFnZTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCwgICAgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFppcHB5U21pdG9uQ29tcG9uZW50ICB7IFxyXG4gICBcclxuICAgaXNFeHBhbmRlZCA9IHRydWU7XHJcblxyXG4gICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZDtcclxuICAgIH1cclxufSJdfQ==