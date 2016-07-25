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
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.totalLikes = 0;
                    this.iLike = false;
                }
                LikeComponent.prototype.onClick = function () {
                    this.iLike = !this.iLike;
                    this.totalLikes += this.iLike ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "iLike", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "\n        <i \n            class=\"glyphicon glyphicon-heart\"\n            [class.highlighted]=\"!iLike\"\n            (click)=\"onClick()\">\n        </i>\n        <span>{{ totalLikes }}</span>\n        ",
                        styles: ["\n            \n            .glyphicon-heart {\n                color: #ccc;\n                cursor: pointer;\n            }\n\n            .highlighted {\n                color: deeppink;\n            }\n\n            .glyphicon-star {\n                color: orange;\n            }\n            \n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWtlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFBQTtvQkFFUyxlQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNmLFVBQUssR0FBRyxLQUFLLENBQUM7Z0JBTXZCLENBQUM7Z0JBSkcsK0JBQU8sR0FBUDtvQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFOTDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NERBQUE7Z0JBakNSO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFFBQVEsRUFBRSwrTUFPTDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxzVEFlUixDQUFDO3FCQUVULENBQUM7O2lDQUFBO2dCQVlGLG9CQUFDO1lBQUQsQ0FBQyxBQVRELElBU0M7WUFURCx5Q0FTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWtlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGkgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1oZWFydFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5oaWdobGlnaHRlZF09XCIhaUxpa2VcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygpXCI+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICAgIDxzcGFuPnt7IHRvdGFsTGlrZXMgfX08L3NwYW4+XHJcbiAgICAgICAgYCxcclxuICAgICAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZ2x5cGhpY29uLWhlYXJ0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGlnaGxpZ2h0ZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRlZXBwaW5rO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ2x5cGhpY29uLXN0YXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBgXVxyXG4gICAgICAgIFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWtlQ29tcG9uZW50IHsgXHJcblxyXG5ASW5wdXQoKSB0b3RhbExpa2VzID0gMDtcclxuQElucHV0KCkgaUxpa2UgPSBmYWxzZTtcclxuXHJcbiAgICBvbkNsaWNrKCl7XHJcbiAgICAgICAgdGhpcy5pTGlrZSA9ICF0aGlzLmlMaWtlO1xyXG4gICAgICAgIHRoaXMudG90YWxMaWtlcyArPSB0aGlzLmlMaWtlID8gMSA6IC0xO1xyXG4gICAgfVxyXG59Il19