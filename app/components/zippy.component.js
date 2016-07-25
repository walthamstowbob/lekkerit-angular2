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
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isExpanded = true;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyComponent.prototype, "heading", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n    \n    <div class=\"col-md-3\">\n    <div class=\"zippy\">\n        <div\n            class=\"zippy-heading\"\n            (click)=\"toggle()\">    \n            {{ heading }}\n        <i \n            class=\"pull-right glyphicon\"\n            [ngClass]=\"\n                {\n                    'glyphicon-chevron-down': !isExpanded,\n                    'glyphicon-chevron-up': !isExpanded\n                }\">\n        </i>\n        </div>\n        <div *ngIf=\"isExpanded\" class=\"zippy-content\">\n\n        <div class=\"media\">\n        <div class=\"media-middle\">\n            <iframe \n                class=\"media-object\" width=\"600\" height=\"325\" src=\"https://www.youtube.com/embed/CRWaXYWFY_k\" frameborder=\"0\" allowfullscreen>\n            </iframe>\n            <a href=\"http://nrmm.london\" target=\"_blank\" class=\"btn btn-primary\" id=\"nrmm\">NRMM Database</a>\n        </div>\n        </div>\n        <ng-content></ng-content>\n        </div>\n        </div>\n        </div>\n\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwcHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiemlwcHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUFBO29CQUVHLGVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBT3JCLENBQUM7Z0JBSEcsK0JBQU0sR0FBTjtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsQ0FBQztnQkFKRjtvQkFBQyxZQUFLLEVBQUU7OytEQUFBO2dCQXpDWDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsb2dDQWdDTDtxQkFDUixDQUFDOztrQ0FBQTtnQkFXRixxQkFBQztZQUFELENBQUMsQUFURCxJQVNDO1lBVEQsMkNBU0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnemlwcHknLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiemlwcHlcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiemlwcHktaGVhZGluZ1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiPiAgICBcclxuICAgICAgICAgICAge3sgaGVhZGluZyB9fVxyXG4gICAgICAgIDxpIFxyXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtcmlnaHQgZ2x5cGhpY29uXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2dseXBoaWNvbi1jaGV2cm9uLWRvd24nOiAhaXNFeHBhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAnZ2x5cGhpY29uLWNoZXZyb24tdXAnOiAhaXNFeHBhbmRlZFxyXG4gICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFeHBhbmRlZFwiIGNsYXNzPVwiemlwcHktY29udGVudFwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1lZGlhLW9iamVjdFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiMzI1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQ1JXYVhZV0ZZX2tcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+XHJcbiAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL25ybW0ubG9uZG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cIm5ybW1cIj5OUk1NIERhdGFiYXNlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgYCwgICAgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFppcHB5Q29tcG9uZW50ICB7IFxyXG4gICBcclxuICAgaXNFeHBhbmRlZCA9IHRydWU7XHJcblxyXG4gICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZDtcclxuICAgIH1cclxufSJdfQ==