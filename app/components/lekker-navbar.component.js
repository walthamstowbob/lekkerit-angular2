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
    var LekkerNavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LekkerNavbarComponent = (function () {
                function LekkerNavbarComponent() {
                    this.viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];
                }
                LekkerNavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'lekker-navbar',
                        template: "\n\n     <nav class=\"navbar-static-top navbar-default\" id=\"home\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-brand\">\n            <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navHeaderCollapse\">Menu</button>\n            <div class=\"collapse navbar-collapse navHeaderCollapse\">\n\n    <ul class=\"nav nav-pills\">\n        <li [class.active]=\"viewMode == 'home'\"><a (click)=\"viewMode = 'home'\">Home</a></li>\n        <li [class.active]=\"viewMode == 'about'\"><a (click)=\"viewMode = 'about'\">About</a></li>\n        <li [class.active]=\"viewMode == 'portfolio'\"><a (click)=\"viewMode = 'portfolio'\">Portfolio</a>\n            </li>\n        <li [class.active]=\"viewMode == 'contact'\"><a href=\"mailto:barry@lekkerit.com\" (click)=\"viewMode = 'contact'\">Contact</a></li>\n        <li [class.active]=\"viewMode == 'desk'\"><a href=\"http://www.lekkerit.com/desk\" (click)=\"viewMode = 'desk'\">Desk</a></li>\n    </ul>\n\n    <div [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'home'\" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>\n        <template [ngSwitchWhen]=\"'about'\"><lekker-about-me></lekker-about-me></template>\n        <template [ngSwitchWhen]=\"'portfolio'\">\n            <zippy-smiton heading=\"Freelance Developer\"></zippy-smiton>\n            <zippy heading=\"Scrum Master\"></zippy>                \n            <zippy-bootstrap heading=\"Bootstrap\"></zippy-bootstrap>\n            <zippy-weather heading=\"Applications\"></zippy-weather>\n        </template>\n    </div>\n\n    </div>\n    </div>\n    </div>\n    \n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], LekkerNavbarComponent);
                return LekkerNavbarComponent;
            }());
            exports_1("LekkerNavbarComponent", LekkerNavbarComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVra2VyLW5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWtrZXItbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVDQTtnQkFBQTtvQkFFSSxhQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBeENEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSw0bkRBZ0NMO3FCQUNSLENBQUM7O3lDQUFBO2dCQUtGLDRCQUFDO1lBQUQsQ0FBQyxBQUhELElBR0M7WUFIRCx5REFHQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xla2tlci1uYXZiYXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHJcbiAgICAgPG5hdiBjbGFzcz1cIm5hdmJhci1zdGF0aWMtdG9wIG5hdmJhci1kZWZhdWx0XCIgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdkhlYWRlckNvbGxhcHNlXCI+TWVudTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIG5hdkhlYWRlckNvbGxhcHNlXCI+XHJcblxyXG4gICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxyXG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInZpZXdNb2RlID09ICdob21lJ1wiPjxhIChjbGljayk9XCJ2aWV3TW9kZSA9ICdob21lJ1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJ2aWV3TW9kZSA9PSAnYWJvdXQnXCI+PGEgKGNsaWNrKT1cInZpZXdNb2RlID0gJ2Fib3V0J1wiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwidmlld01vZGUgPT0gJ3BvcnRmb2xpbydcIj48YSAoY2xpY2spPVwidmlld01vZGUgPSAncG9ydGZvbGlvJ1wiPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJ2aWV3TW9kZSA9PSAnY29udGFjdCdcIj48YSBocmVmPVwibWFpbHRvOmJhcnJ5QGxla2tlcml0LmNvbVwiIChjbGljayk9XCJ2aWV3TW9kZSA9ICdjb250YWN0J1wiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJ2aWV3TW9kZSA9PSAnZGVzaydcIj48YSBocmVmPVwiaHR0cDovL3d3dy5sZWtrZXJpdC5jb20vZGVza1wiIChjbGljayk9XCJ2aWV3TW9kZSA9ICdkZXNrJ1wiPkRlc2s8L2E+PC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwidmlld01vZGVcIj5cclxuICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInaG9tZSdcIiBuZ1N3aXRjaERlZmF1bHQ+PGxla2tlci1qdW1ib3Ryb24+PC9sZWtrZXItanVtYm90cm9uPjwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2Fib3V0J1wiPjxsZWtrZXItYWJvdXQtbWU+PC9sZWtrZXItYWJvdXQtbWU+PC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCIncG9ydGZvbGlvJ1wiPlxyXG4gICAgICAgICAgICA8emlwcHktc21pdG9uIGhlYWRpbmc9XCJGcmVlbGFuY2UgRGV2ZWxvcGVyXCI+PC96aXBweS1zbWl0b24+XHJcbiAgICAgICAgICAgIDx6aXBweSBoZWFkaW5nPVwiU2NydW0gTWFzdGVyXCI+PC96aXBweT4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDx6aXBweS1ib290c3RyYXAgaGVhZGluZz1cIkJvb3RzdHJhcFwiPjwvemlwcHktYm9vdHN0cmFwPlxyXG4gICAgICAgICAgICA8emlwcHktd2VhdGhlciBoZWFkaW5nPVwiQXBwbGljYXRpb25zXCI+PC96aXBweS13ZWF0aGVyPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICBgLCAgICAgICAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGVra2VyTmF2YmFyQ29tcG9uZW50ICB7XHJcblxyXG4gICAgdmlld01vZGUgPSBbJ2hvbWUnLCAnYWJvdXQnLCAncG9ydGZvbGlvJywgJ2NvbnRhY3QnLCAnZGVzayddO1xyXG59Il19