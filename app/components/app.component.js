// Main Component

System.register(['angular2/core', './components/lekker-navbar.component', './components/lekker-jumbotron.component', './components/lekker-about-me.component', './components/zippy.component', './components/zippy-portfolio.component', './components/zippy-weather.component', './components/zippy-smiton.component', './components/zippy-bootstrap.component', './components/contact-form.component', './components/lekker-footer.component'], function(exports_1, context_1) {
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
    var core_1, lekker_navbar_component_1, lekker_jumbotron_component_1, lekker_about_me_component_1, zippy_component_1, zippy_portfolio_component_1, zippy_weather_component_1, zippy_smiton_component_1, zippy_bootstrap_component_1, contact_form_component_1, lekker_footer_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lekker_navbar_component_1_1) {
                lekker_navbar_component_1 = lekker_navbar_component_1_1;
            },
            function (lekker_jumbotron_component_1_1) {
                lekker_jumbotron_component_1 = lekker_jumbotron_component_1_1;
            },
            function (lekker_about_me_component_1_1) {
                lekker_about_me_component_1 = lekker_about_me_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (zippy_portfolio_component_1_1) {
                zippy_portfolio_component_1 = zippy_portfolio_component_1_1;
            },
            function (zippy_weather_component_1_1) {
                zippy_weather_component_1 = zippy_weather_component_1_1;
            },
            function (zippy_smiton_component_1_1) {
                zippy_smiton_component_1 = zippy_smiton_component_1_1;
            },
            function (zippy_bootstrap_component_1_1) {
                zippy_bootstrap_component_1 = zippy_bootstrap_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (lekker_footer_component_1_1) {
                lekker_footer_component_1 = lekker_footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];
                    this.isUp = true;
                }
                AppComponent.prototype.onUpChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onClick = function () {
                    this.isUp = !this.isUp;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"navbar-static-top navbar-default\" role=\"navigation\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-brand\">\n            <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navHeaderCollapse\">Menu</button>\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"./logo.jpg\"></a> \n\n    <ul class=\"nav nav-pills navbar-left\">\n        <li [class.active]=\"viewMode == 'home'\"><a href=\"#\" (click)=\"viewMode = 'home'\">Home</a></li>\n        <li [class.active]=\"viewMode == 'about'\"><a href=\"#\" (click)=\"viewMode = 'about'\">About</a></li>\n        <li [class.active]=\"viewMode == 'portfolio'\"><a href=\"#\" (click)=\"viewMode = 'portfolio'\">Portfolio</a>\n            </li>\n        <li [class.active]=\"viewMode == 'contact'\"><a href=\"#\" (click)=\"viewMode = 'contact'\">Contact</a></li>\n        <li [class.active]=\"viewMode == 'desk'\"><a href=\"http://www.lekkerit.com/desk\" target= \"_blank\" (click)=\"viewMode = 'desk'\">Desk</a></li>\n    </ul>\n\n    <div class=\"zippy-page\" [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'home'\" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>\n        <template [ngSwitchWhen]=\"'about'\"><lekker-about-me></lekker-about-me></template>\n        <template [ngSwitchWhen]=\"'portfolio'\">\n            <zippy-smiton heading=\"Freelance Developer\"></zippy-smiton>\n            <zippy heading=\"Scrum Master\"></zippy>                \n            <zippy-bootstrap heading=\"Bootstrap\"></zippy-bootstrap>\n            <zippy-weather heading=\"Applications\"></zippy-weather>\n        </template>\n        <template [ngSwitchWhen]=\"'contact'\"><contact-form></contact-form></template>\n    </div>\n    </div>\n    </div>\n    </div>\n\n    <lekker-footer></lekker-footer>\n\n    <div class=\"container\" class=\"container-img\">\n          \n    </div>\n\n                ",
                        directives: [lekker_navbar_component_1.LekkerNavbarComponent, lekker_jumbotron_component_1.LekkerJumbotronComponent, lekker_about_me_component_1.LekkerAboutMeComponent, zippy_portfolio_component_1.ZippyPortfolioComponent, contact_form_component_1.ContactFormComponent, zippy_component_1.ZippyComponent, zippy_weather_component_1.ZippyWeatherComponent, zippy_smiton_component_1.ZippySmitonComponent, zippy_bootstrap_component_1.ZippyBootstrapComponent, lekker_footer_component_1.LekkerFooterComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwREE7Z0JBQUE7b0JBRUksYUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQU03RCxTQUFJLEdBQUcsSUFBSSxDQUFDO2dCQU1oQixDQUFDLEFBRkk7Z0JBUkQsaUNBQVUsR0FBVixVQUFXLE1BQU07b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFJRCw4QkFBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQXhETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUseTVEQXFDRzt3QkFDYixVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsRUFBRSxxREFBd0IsRUFBRSxrREFBc0IsRUFBRSxtREFBdUIsRUFBRSw2Q0FBb0IsRUFBRSxnQ0FBYyxFQUFFLCtDQUFxQixFQUFFLDZDQUFvQixFQUFFLG1EQUF1QixFQUFFLCtDQUFxQixDQUFDO3FCQUVwUCxDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQUFDLEFBZEQsSUFZSztZQVpMLHVDQVlLLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQge0xla2tlck5hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xla2tlci1uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7TGVra2VySnVtYm90cm9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGVra2VyLWp1bWJvdHJvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtMZWtrZXJBYm91dE1lQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGVra2VyLWFib3V0LW1lLmNvbXBvbmVudCc7XG5pbXBvcnQge1ppcHB5Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvemlwcHkuY29tcG9uZW50JztcbmltcG9ydCB7WmlwcHlQb3J0Zm9saW9Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy96aXBweS1wb3J0Zm9saW8uY29tcG9uZW50JztcbmltcG9ydCB7WmlwcHlXZWF0aGVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvemlwcHktd2VhdGhlci5jb21wb25lbnQnO1xuaW1wb3J0IHtaaXBweVNtaXRvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ppcHB5LXNtaXRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtaaXBweUJvb3RzdHJhcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3ppcHB5LWJvb3RzdHJhcC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250YWN0Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtMZWtrZXJGb290ZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9sZWtrZXItZm9vdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItc3RhdGljLXRvcCBuYXZiYXItZGVmYXVsdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdkhlYWRlckNvbGxhcHNlXCI+TWVudTwvYnV0dG9uPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPjxpbWcgc3JjPVwiLi9sb2dvLmpwZ1wiPjwvYT4gXG5cbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzIG5hdmJhci1sZWZ0XCI+XG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInZpZXdNb2RlID09ICdob21lJ1wiPjxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cInZpZXdNb2RlID0gJ2hvbWUnXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJ2aWV3TW9kZSA9PSAnYWJvdXQnXCI+PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwidmlld01vZGUgPSAnYWJvdXQnXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwidmlld01vZGUgPT0gJ3BvcnRmb2xpbydcIj48YSBocmVmPVwiI1wiIChjbGljayk9XCJ2aWV3TW9kZSA9ICdwb3J0Zm9saW8nXCI+UG9ydGZvbGlvPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwidmlld01vZGUgPT0gJ2NvbnRhY3QnXCI+PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwidmlld01vZGUgPSAnY29udGFjdCdcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInZpZXdNb2RlID09ICdkZXNrJ1wiPjxhIGhyZWY9XCJodHRwOi8vd3d3Lmxla2tlcml0LmNvbS9kZXNrXCIgdGFyZ2V0PSBcIl9ibGFua1wiIChjbGljayk9XCJ2aWV3TW9kZSA9ICdkZXNrJ1wiPkRlc2s8L2E+PC9saT5cbiAgICA8L3VsPlxuXG4gICAgPGRpdiBjbGFzcz1cInppcHB5LXBhZ2VcIiBbbmdTd2l0Y2hdPVwidmlld01vZGVcIj5cbiAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2hvbWUnXCIgbmdTd2l0Y2hEZWZhdWx0PjxsZWtrZXItanVtYm90cm9uPjwvbGVra2VyLWp1bWJvdHJvbj48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYWJvdXQnXCI+PGxla2tlci1hYm91dC1tZT48L2xla2tlci1hYm91dC1tZT48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCIncG9ydGZvbGlvJ1wiPlxuICAgICAgICAgICAgPHppcHB5LXNtaXRvbiBoZWFkaW5nPVwiRnJlZWxhbmNlIERldmVsb3BlclwiPjwvemlwcHktc21pdG9uPlxuICAgICAgICAgICAgPHppcHB5IGhlYWRpbmc9XCJTY3J1bSBNYXN0ZXJcIj48L3ppcHB5PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDx6aXBweS1ib290c3RyYXAgaGVhZGluZz1cIkJvb3RzdHJhcFwiPjwvemlwcHktYm9vdHN0cmFwPlxuICAgICAgICAgICAgPHppcHB5LXdlYXRoZXIgaGVhZGluZz1cIkFwcGxpY2F0aW9uc1wiPjwvemlwcHktd2VhdGhlcj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2NvbnRhY3QnXCI+PGNvbnRhY3QtZm9ybT48L2NvbnRhY3QtZm9ybT48L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGxla2tlci1mb290ZXI+PC9sZWtrZXItZm9vdGVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGNsYXNzPVwiY29udGFpbmVyLWltZ1wiPlxuICAgICAgICAgIFxuICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTGVra2VyTmF2YmFyQ29tcG9uZW50LCBMZWtrZXJKdW1ib3Ryb25Db21wb25lbnQsIExla2tlckFib3V0TWVDb21wb25lbnQsIFppcHB5UG9ydGZvbGlvQ29tcG9uZW50LCBDb250YWN0Rm9ybUNvbXBvbmVudCwgWmlwcHlDb21wb25lbnQsIFppcHB5V2VhdGhlckNvbXBvbmVudCwgWmlwcHlTbWl0b25Db21wb25lbnQsIFppcHB5Qm9vdHN0cmFwQ29tcG9uZW50LCBMZWtrZXJGb290ZXJDb21wb25lbnRdLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIHZpZXdNb2RlID0gWydob21lJywgJ2Fib3V0JywgJ3BvcnRmb2xpbycsICdjb250YWN0JywgJ2Rlc2snXTtcblxuICAgIG9uVXBDaGFuZ2UoJGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcbiAgICB9XG5cbiAgICBpc1VwID0gdHJ1ZTtcblxuICAgIG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5pc1VwID0gIXRoaXMuaXNVcDtcbiAgICB9XG5cbiJdfQ==