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
    var ZippyPortfolioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyPortfolioComponent = (function () {
                function ZippyPortfolioComponent() {
                    this.isExpanded = false;
                }
                ZippyPortfolioComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyPortfolioComponent.prototype, "heading", void 0);
                ZippyPortfolioComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy-portfolio',
                        template: "\n\n    <div class=\"lekker-portfolio\">\n        <div class=\"container\">\n        <div class=\"row padding\">\n        <h1 class=\"text-center\" id=\"portfolio\">Portfolio</h1>\n\n        <zippy-smiton heading=\"Freelance Developer\">\n                </zippy-smiton>\n\n                <zippy heading=\"Scrum Master\">\n                </zippy>\n                \n                <zippy-bootstrap heading=\"Bootstrap\">\n                </zippy-bootstrap>\n\n                <zippy-weather heading=\"Applications\">\n                </zippy-weather>\n\n    </div>\n    </div>\n    </div>\n    \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyPortfolioComponent);
                return ZippyPortfolioComponent;
            }());
            exports_1("ZippyPortfolioComponent", ZippyPortfolioComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwcHktcG9ydGZvbGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInppcHB5LXBvcnRmb2xpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7b0JBRUcsZUFBVSxHQUFHLEtBQUssQ0FBQztnQkFPdEIsQ0FBQztnQkFIRyx3Q0FBTSxHQUFOO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN2QyxDQUFDO2dCQUpGO29CQUFDLFlBQUssRUFBRTs7d0VBQUE7Z0JBakNYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLDZsQkF1QlQ7cUJBRUosQ0FBQzs7MkNBQUE7Z0JBV0YsOEJBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQVRELDZEQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ppcHB5LXBvcnRmb2xpbycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJsZWtrZXItcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcGFkZGluZ1wiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyXCIgaWQ9XCJwb3J0Zm9saW9cIj5Qb3J0Zm9saW88L2gxPlxyXG5cclxuICAgICAgICA8emlwcHktc21pdG9uIGhlYWRpbmc9XCJGcmVlbGFuY2UgRGV2ZWxvcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8L3ppcHB5LXNtaXRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8emlwcHkgaGVhZGluZz1cIlNjcnVtIE1hc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPC96aXBweT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHppcHB5LWJvb3RzdHJhcCBoZWFkaW5nPVwiQm9vdHN0cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8L3ppcHB5LWJvb3RzdHJhcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8emlwcHktd2VhdGhlciBoZWFkaW5nPVwiQXBwbGljYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8L3ppcHB5LXdlYXRoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBgLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBaaXBweVBvcnRmb2xpb0NvbXBvbmVudCAgeyBcclxuICAgXHJcbiAgIGlzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSAhdGhpcy5pc0V4cGFuZGVkO1xyXG4gICAgfVxyXG59Il19