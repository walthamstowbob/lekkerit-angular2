import {Component} from 'angular2/core';

import {ZippyComponent} from './components/zippy.component';
import {TweetComponent} from './components/tweet.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {TweetService} from './services/tweet.service';
import {VoteComponent} from './components/vote.component';
import {LikeComponent} from './components/like.component';
import {FavoriteComponent} from './components/favorite.component';
import {CoursesComponent} from './components/courses.component';
import {AuthorsComponent} from './components/authors.component';
import {ArtistsComponent} from './components/artists.component';

@Component({
    selector: 'my-app',
    template: `
              
        <contact-form></contact-form>

        <zippy heading="who can see my stuff?">
            Content of who can see my stuff
        </zippy>

        <zippy heading="Who can contact me?">
        Content of who can contact me
        </zippy>
        
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
        </ul>

        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault></template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>

        <div class ="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.2854559160382!2d5.170772106274482!3d52.28611274115522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30368c8b0122d0f8!2sSimsation+Nederland!5e0!3m2!1sen!2sus!4v1467201296315" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>

        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{ i + 1 }} - {{ course }}
            </li>
        </ul>

        <div class="map">
        {{ course.title | uppercase }}<br/>
        {{ course.students | number }}<br/>
        {{ course.rating | number:'2.2-2' }}<br/>
        {{ course.price | currency:'EUR':true:'2.2-2' }}<br/>
        {{ course.releaseDate | date:'MMM yyyy' }}<br/>
        {{ course | json }}
        </div>

        <div class="map">
        {{ post.title }}<br/>
        {{ post.body | summary:10}}
        </div>
        
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>

        <div [hidden]="courses.length == 0">List of Courses</div>

        <div [hidden]="courses.lenght > 0">No courses active</div>
        
        <div *ngIf="courses.length == 0">List of Courses</div>

        <div *ngIf="courses.lenght > 0">No courses active</div>

        <vote
            [voteCount]="post.voteCount"
            [iVote]="post.iVote"
            (vote)="onVote($event)">
        </vote>

        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>

        <i class="glyphicon glyphicon-heart"></i>

        <i class="glyphicon glyphicon-star"></i>

        <favorite [isFavorite]="post.isFavorite"
        (change)="onFavoriteChange($event)"></favorite>

        <input type="text" [(ngModel)]="title" />
        <input type="button" (click)="title = ''" value="Clear" />
        Preview: {{ title }}

        <courses></courses>
        <authors></authors>
        <artists></artists>
            `,
            styles: [`
    
            .nav-pills {
                margin-bottom: 20px;
        }
            .map {
                margin-bottom: 20px;
        }

            .panel {
                margin-bottom: 20px;
            }
        
    `],
    directives: [ZippyComponent, TweetComponent, VoteComponent, LikeComponent, FavoriteComponent, CoursesComponent, AuthorsComponent, ArtistsComponent],
    providers: [TweetService],
    pipes: [SummaryPipe]
})
export class AppComponent {
    viewMode = 'map';
    
    courses = ['Course1', 'Course2', 'Course3'];

    course = {
        title:"Angular 2 for Beginners",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    }

    tweets: any[];

        constructor(tweetService: TweetService){
            this.tweets = tweetService.getTweets();
        }

    tweet = {
        totalVotes: 11,
        iVote: false,
        totalLikes: 10,
        iLike: false
    }
    
    post = {
        title: "Angular 2 Tutorial for Beginners",
        body: `Lorem ipsum dolor sit amet, eam mediocrem molestiae honestatis cu, prima primis graeco ex eum. Pro propriae atomorum constituto ea, decore cetero definitiones cu ius. Ei verear deleniti laboramus quo, facete numquam nominati ea quo, id vix viris equidem percipit. Ei ullum aeque alienum vis, possit abhorreant vix ut.`
        voteCount: 10,
        iVote: 0,
        title: "Title",
        isFavorite:true
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onUpChange($event){
        console.log($event);
    }

    isUp = false;
    
    isFavorite = false;

    onClick(){
        this.isUp = !this.isUp;
        this.isFavorite = !this.isFavorite;
    }

    title = "Angular App";
}