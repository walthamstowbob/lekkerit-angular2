import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {LekkerNavbarComponent} from './components/lekker-navbar.component';
import {LekkerJumbotronComponent} from './components/lekker-jumbotron.component';
import {LekkerAboutMeComponent} from './components/lekker-about-me.component';
import {ZippyComponent} from './components/zippy.component';
import {ZippyPortfolioComponent} from './components/zippy-portfolio.component';
import {ZippyWeatherComponent} from './components/zippy-weather.component';
import {ZippySmitonComponent} from './components/zippy-smiton.component';
import {ZippyBootstrapComponent} from './components/zippy-bootstrap.component';
import {ContactFormComponent} from './components/contact-form.component';
import {LekkerFooterComponent} from './components/lekker-footer.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="navbar-static-top navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-brand">
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">Menu</button>
            <a class="navbar-brand" href="#"><img src="./logo.jpg"></a> 

    <ul class="nav nav-pills navbar-left">
        <li [class.active]="viewMode == 'home'"><a href="#" (click)="viewMode = 'home'">Home</a></li>
        <li [class.active]="viewMode == 'about'"><a href="#" (click)="viewMode = 'about'">About</a></li>
        <li [class.active]="viewMode == 'portfolio'"><a href="#" (click)="viewMode = 'portfolio'">Portfolio</a>
            </li>
        <li [class.active]="viewMode == 'contact'"><a href="#" (click)="viewMode = 'contact'">Contact</a></li>
        <li [class.active]="viewMode == 'desk'"><a href="http://www.lekkerit.com/desk" target= "_blank" (click)="viewMode = 'desk'">Desk</a></li>
    </ul>

    <div class="zippy-page" [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'home'" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>
        <template [ngSwitchWhen]="'about'"><lekker-about-me></lekker-about-me></template>
        <template [ngSwitchWhen]="'portfolio'">
            <zippy-smiton heading="Freelance Developer"></zippy-smiton>
            <zippy heading="Scrum Master"></zippy>                
            <zippy-bootstrap heading="Bootstrap"></zippy-bootstrap>
            <zippy-weather heading="Applications"></zippy-weather>
        </template>
        <template [ngSwitchWhen]="'contact'"><contact-form></contact-form></template>
    </div>
    </div>
    </div>
    </div>

    <lekker-footer></lekker-footer>

    <div class="container" class="container-img">
          
    </div>

                `,
    directives: [LekkerNavbarComponent, LekkerJumbotronComponent, LekkerAboutMeComponent, ZippyPortfolioComponent, ContactFormComponent, ZippyComponent, ZippyWeatherComponent, ZippySmitonComponent, ZippyBootstrapComponent, LekkerFooterComponent],

})

export class AppComponent {

    viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];

    onUpChange($event){
        console.log($event);
    }

    isUp = true;

    onClick(){
        this.isUp = !this.isUp;
    }

