System.register(['angular2/core', './components/zippy.component', './components/tweet.component', './pipes/summary.pipe', './services/tweet.service', './components/vote.component', './components/like.component', './components/favorite.component', './components/courses.component', './components/authors.component', './components/artists.component'], function(exports_1, context_1) {
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
    var core_1, zippy_component_1, tweet_component_1, summary_pipe_1, tweet_service_1, vote_component_1, like_component_1, favorite_component_1, courses_component_1, authors_component_1, artists_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (artists_component_1_1) {
                artists_component_1 = artists_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.viewMode = 'map';
                    this.courses = ['Course1', 'Course2', 'Course3'];
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1)
                    };
                    this.tweet = {
                        totalVotes: 11,
                        iVote: false,
                        totalLikes: 10,
                        iLike: false
                    };
                    this.post = {
                        title: "Angular 2 Tutorial for Beginners",
                        body: "Lorem ipsum dolor sit amet, eam mediocrem molestiae honestatis cu, prima primis graeco ex eum. Pro propriae atomorum constituto ea, decore cetero definitiones cu ius. Ei verear deleniti laboramus quo, facete numquam nominati ea quo, id vix viris equidem percipit. Ei ullum aeque alienum vis, possit abhorreant vix ut.",
                        voteCount: 10,
                        iVote: 0,
                        title: "Title",
                        isFavorite: true
                    };
                    this.isUp = false;
                    this.isFavorite = false;
                    this.title = "Angular App";
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onUpChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onClick = function () {
                    this.isUp = !this.isUp;
                    this.isFavorite = !this.isFavorite;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n              \n        <contact-form></contact-form>\n\n        <zippy heading=\"who can see my stuff?\">\n            Content of who can see my stuff\n        </zippy>\n\n        <zippy heading=\"Who can contact me?\">\n        Content of who can contact me\n        </zippy>\n        \n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n        </ul>\n\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault></template>\n            <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n        </div>\n\n        <div class =\"map\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.2854559160382!2d5.170772106274482!3d52.28611274115522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30368c8b0122d0f8!2sSimsation+Nederland!5e0!3m2!1sen!2sus!4v1467201296315\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe></div>\n\n        <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n                {{ i + 1 }} - {{ course }}\n            </li>\n        </ul>\n\n        <div class=\"map\">\n        {{ course.title | uppercase }}<br/>\n        {{ course.students | number }}<br/>\n        {{ course.rating | number:'2.2-2' }}<br/>\n        {{ course.price | currency:'EUR':true:'2.2-2' }}<br/>\n        {{ course.releaseDate | date:'MMM yyyy' }}<br/>\n        {{ course | json }}\n        </div>\n\n        <div class=\"map\">\n        {{ post.title }}<br/>\n        {{ post.body | summary:10}}\n        </div>\n        \n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>\n\n        <div [hidden]=\"courses.length == 0\">List of Courses</div>\n\n        <div [hidden]=\"courses.lenght > 0\">No courses active</div>\n        \n        <div *ngIf=\"courses.length == 0\">List of Courses</div>\n\n        <div *ngIf=\"courses.lenght > 0\">No courses active</div>\n\n        <vote\n            [voteCount]=\"post.voteCount\"\n            [iVote]=\"post.iVote\"\n            (vote)=\"onVote($event)\">\n        </vote>\n\n        <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n\n        <i class=\"glyphicon glyphicon-heart\"></i>\n\n        <i class=\"glyphicon glyphicon-star\"></i>\n\n        <favorite [isFavorite]=\"post.isFavorite\"\n        (change)=\"onFavoriteChange($event)\"></favorite>\n\n        <input type=\"text\" [(ngModel)]=\"title\" />\n        <input type=\"button\" (click)=\"title = ''\" value=\"Clear\" />\n        Preview: {{ title }}\n\n        <courses></courses>\n        <authors></authors>\n        <artists></artists>\n            ",
                        styles: ["\n    \n            .nav-pills {\n                margin-bottom: 20px;\n        }\n            .map {\n                margin-bottom: 20px;\n        }\n\n            .panel {\n                margin-bottom: 20px;\n            }\n        \n    "],
                        directives: [zippy_component_1.ZippyComponent, tweet_component_1.TweetComponent, vote_component_1.VoteComponent, like_component_1.LikeComponent, favorite_component_1.FavoriteComponent, courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, artists_component_1.ArtistsComponent],
                        providers: [tweet_service_1.TweetService],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof tweet_service_1.TweetService !== 'undefined' && tweet_service_1.TweetService) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnSEE7Z0JBZVEsc0JBQVksWUFBMEI7b0JBZDFDLGFBQVEsR0FBRyxLQUFLLENBQUM7b0JBRWpCLFlBQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRTVDLFdBQU0sR0FBRzt3QkFDTCxLQUFLLEVBQUMseUJBQXlCO3dCQUMvQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxLQUFLLEVBQUUsS0FBSzt3QkFDWixXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3BDLENBQUE7b0JBUUQsVUFBSyxHQUFHO3dCQUNKLFVBQVUsRUFBRSxFQUFFO3dCQUNkLEtBQUssRUFBRSxLQUFLO3dCQUNaLFVBQVUsRUFBRSxFQUFFO3dCQUNkLEtBQUssRUFBRSxLQUFLO3FCQUNmLENBQUE7b0JBRUQsU0FBSSxHQUFHO3dCQUNILEtBQUssRUFBRSxrQ0FBa0M7d0JBQ3pDLElBQUksRUFBRSwrVEFBK1Q7d0JBQ3JVLFNBQVMsRUFBRSxFQUFFO3dCQUNiLEtBQUssRUFBRSxDQUFDO3dCQUNSLEtBQUssRUFBRSxPQUFPO3dCQUNkLFVBQVUsRUFBQyxJQUFJO3FCQUNsQixDQUFBO29CQVVELFNBQUksR0FBRyxLQUFLLENBQUM7b0JBRWIsZUFBVSxHQUFHLEtBQUssQ0FBQztvQkFPbkIsVUFBSyxHQUFHLGFBQWEsQ0FBQztvQkFwQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBa0JMLHVDQUFnQixHQUFoQixVQUFpQixNQUFNO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELGlDQUFVLEdBQVYsVUFBVyxNQUFNO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBTUQsOEJBQU8sR0FBUDtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBckpMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1MEZBOEVEO3dCQUNELE1BQU0sRUFBRSxDQUFDLHFQQWFoQixDQUFDO3dCQUNGLFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxFQUFFLDhCQUFhLEVBQUUsc0NBQWlCLEVBQUUsb0NBQWdCLEVBQUUsb0NBQWdCLEVBQUUsb0NBQWdCLENBQUM7d0JBQ25KLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7d0JBQ3pCLEtBQUssRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQ3ZCLENBQUM7O2dDQUFBO2dCQXNERixtQkFBQzs7WUFBRCxDQUFDLEFBckRELElBcURDO1lBckRELHVDQXFEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge1ppcHB5Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvemlwcHkuY29tcG9uZW50JztcbmltcG9ydCB7VHdlZXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy90d2VldC5jb21wb25lbnQnO1xuaW1wb3J0IHtTdW1tYXJ5UGlwZX0gZnJvbSAnLi9waXBlcy9zdW1tYXJ5LnBpcGUnO1xuaW1wb3J0IHtUd2VldFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdHdlZXQuc2VydmljZSc7XG5pbXBvcnQge1ZvdGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy92b3RlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xpa2VDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9saWtlLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zhdm9yaXRlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZmF2b3JpdGUuY29tcG9uZW50JztcbmltcG9ydCB7Q291cnNlc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdXJzZXMuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aG9yc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dGhvcnMuY29tcG9uZW50JztcbmltcG9ydCB7QXJ0aXN0c0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FydGlzdHMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIFxuICAgICAgICA8Y29udGFjdC1mb3JtPjwvY29udGFjdC1mb3JtPlxuXG4gICAgICAgIDx6aXBweSBoZWFkaW5nPVwid2hvIGNhbiBzZWUgbXkgc3R1ZmY/XCI+XG4gICAgICAgICAgICBDb250ZW50IG9mIHdobyBjYW4gc2VlIG15IHN0dWZmXG4gICAgICAgIDwvemlwcHk+XG5cbiAgICAgICAgPHppcHB5IGhlYWRpbmc9XCJXaG8gY2FuIGNvbnRhY3QgbWU/XCI+XG4gICAgICAgIENvbnRlbnQgb2Ygd2hvIGNhbiBjb250YWN0IG1lXG4gICAgICAgIDwvemlwcHk+XG4gICAgICAgIFxuICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XG4gICAgICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJ2aWV3TW9kZSA9PSAnbWFwJ1wiPjxhIChjbGljayk9XCJ2aWV3TW9kZSA9ICdtYXAnXCI+TWFwIFZpZXc8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInZpZXdNb2RlID09ICdsaXN0J1wiPjxhIChjbGljayk9XCJ2aWV3TW9kZSA9ICdsaXN0J1wiPkxpc3QgVmlldzwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInZpZXdNb2RlXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInbWFwJ1wiIG5nU3dpdGNoRGVmYXVsdD48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2xpc3QnXCI+TGlzdCBWaWV3IENvbnRlbnQ8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzID1cIm1hcFwiPjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzg3NC4yODU0NTU5MTYwMzgyITJkNS4xNzA3NzIxMDYyNzQ0ODIhM2Q1Mi4yODYxMTI3NDExNTUyMiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4MzAzNjhjOGIwMTIyZDBmOCEyc1NpbXNhdGlvbitOZWRlcmxhbmQhNWUwITNtMiExc2VuITJzdXMhNHYxNDY3MjAxMjk2MzE1XCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzdHlsZT1cImJvcmRlcjowXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvZGl2PlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjY291cnNlIG9mIGNvdXJzZXMsICNpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICB7eyBpICsgMSB9fSAtIHt7IGNvdXJzZSB9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwXCI+XG4gICAgICAgIHt7IGNvdXJzZS50aXRsZSB8IHVwcGVyY2FzZSB9fTxici8+XG4gICAgICAgIHt7IGNvdXJzZS5zdHVkZW50cyB8IG51bWJlciB9fTxici8+XG4gICAgICAgIHt7IGNvdXJzZS5yYXRpbmcgfCBudW1iZXI6JzIuMi0yJyB9fTxici8+XG4gICAgICAgIHt7IGNvdXJzZS5wcmljZSB8IGN1cnJlbmN5OidFVVInOnRydWU6JzIuMi0yJyB9fTxici8+XG4gICAgICAgIHt7IGNvdXJzZS5yZWxlYXNlRGF0ZSB8IGRhdGU6J01NTSB5eXl5JyB9fTxici8+XG4gICAgICAgIHt7IGNvdXJzZSB8IGpzb24gfX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcFwiPlxuICAgICAgICB7eyBwb3N0LnRpdGxlIH19PGJyLz5cbiAgICAgICAge3sgcG9zdC5ib2R5IHwgc3VtbWFyeToxMH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiAqbmdGb3I9XCIjdHdlZXQgb2YgdHdlZXRzXCI+XG4gICAgICAgICAgICA8dHdlZXQgW2RhdGFdPVwidHdlZXRcIj48L3R3ZWV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiY291cnNlcy5sZW5ndGggPT0gMFwiPkxpc3Qgb2YgQ291cnNlczwvZGl2PlxuXG4gICAgICAgIDxkaXYgW2hpZGRlbl09XCJjb3Vyc2VzLmxlbmdodCA+IDBcIj5ObyBjb3Vyc2VzIGFjdGl2ZTwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiAqbmdJZj1cImNvdXJzZXMubGVuZ3RoID09IDBcIj5MaXN0IG9mIENvdXJzZXM8L2Rpdj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY291cnNlcy5sZW5naHQgPiAwXCI+Tm8gY291cnNlcyBhY3RpdmU8L2Rpdj5cblxuICAgICAgICA8dm90ZVxuICAgICAgICAgICAgW3ZvdGVDb3VudF09XCJwb3N0LnZvdGVDb3VudFwiXG4gICAgICAgICAgICBbaVZvdGVdPVwicG9zdC5pVm90ZVwiXG4gICAgICAgICAgICAodm90ZSk9XCJvblZvdGUoJGV2ZW50KVwiPlxuICAgICAgICA8L3ZvdGU+XG5cbiAgICAgICAgPGxpa2UgW3RvdGFsTGlrZXNdPVwidHdlZXQudG90YWxMaWtlc1wiIFtpTGlrZV09XCJ0d2VldC5pTGlrZVwiPjwvbGlrZT5cblxuICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24taGVhcnRcIj48L2k+XG5cbiAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcIj48L2k+XG5cbiAgICAgICAgPGZhdm9yaXRlIFtpc0Zhdm9yaXRlXT1cInBvc3QuaXNGYXZvcml0ZVwiXG4gICAgICAgIChjaGFuZ2UpPVwib25GYXZvcml0ZUNoYW5nZSgkZXZlbnQpXCI+PC9mYXZvcml0ZT5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInRpdGxlXCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidGl0bGUgPSAnJ1wiIHZhbHVlPVwiQ2xlYXJcIiAvPlxuICAgICAgICBQcmV2aWV3OiB7eyB0aXRsZSB9fVxuXG4gICAgICAgIDxjb3Vyc2VzPjwvY291cnNlcz5cbiAgICAgICAgPGF1dGhvcnM+PC9hdXRob3JzPlxuICAgICAgICA8YXJ0aXN0cz48L2FydGlzdHM+XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgc3R5bGVzOiBbYFxuICAgIFxuICAgICAgICAgICAgLm5hdi1waWxscyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICAgICAucGFuZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtaaXBweUNvbXBvbmVudCwgVHdlZXRDb21wb25lbnQsIFZvdGVDb21wb25lbnQsIExpa2VDb21wb25lbnQsIEZhdm9yaXRlQ29tcG9uZW50LCBDb3Vyc2VzQ29tcG9uZW50LCBBdXRob3JzQ29tcG9uZW50LCBBcnRpc3RzQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtUd2VldFNlcnZpY2VdLFxuICAgIHBpcGVzOiBbU3VtbWFyeVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdmlld01vZGUgPSAnbWFwJztcbiAgICBcbiAgICBjb3Vyc2VzID0gWydDb3Vyc2UxJywgJ0NvdXJzZTInLCAnQ291cnNlMyddO1xuXG4gICAgY291cnNlID0ge1xuICAgICAgICB0aXRsZTpcIkFuZ3VsYXIgMiBmb3IgQmVnaW5uZXJzXCIsXG4gICAgICAgIHJhdGluZzogNC45NzQ1LFxuICAgICAgICBzdHVkZW50czogNTk4MSxcbiAgICAgICAgcHJpY2U6IDk5Ljk1LFxuICAgICAgICByZWxlYXNlRGF0ZTogbmV3IERhdGUoMjAxNiwgMywgMSlcbiAgICB9XG5cbiAgICB0d2VldHM6IGFueVtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHR3ZWV0U2VydmljZTogVHdlZXRTZXJ2aWNlKXtcbiAgICAgICAgICAgIHRoaXMudHdlZXRzID0gdHdlZXRTZXJ2aWNlLmdldFR3ZWV0cygpO1xuICAgICAgICB9XG5cbiAgICB0d2VldCA9IHtcbiAgICAgICAgdG90YWxWb3RlczogMTEsXG4gICAgICAgIGlWb3RlOiBmYWxzZSxcbiAgICAgICAgdG90YWxMaWtlczogMTAsXG4gICAgICAgIGlMaWtlOiBmYWxzZVxuICAgIH1cbiAgICBcbiAgICBwb3N0ID0ge1xuICAgICAgICB0aXRsZTogXCJBbmd1bGFyIDIgVHV0b3JpYWwgZm9yIEJlZ2lubmVyc1wiLFxuICAgICAgICBib2R5OiBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGVhbSBtZWRpb2NyZW0gbW9sZXN0aWFlIGhvbmVzdGF0aXMgY3UsIHByaW1hIHByaW1pcyBncmFlY28gZXggZXVtLiBQcm8gcHJvcHJpYWUgYXRvbW9ydW0gY29uc3RpdHV0byBlYSwgZGVjb3JlIGNldGVybyBkZWZpbml0aW9uZXMgY3UgaXVzLiBFaSB2ZXJlYXIgZGVsZW5pdGkgbGFib3JhbXVzIHF1bywgZmFjZXRlIG51bXF1YW0gbm9taW5hdGkgZWEgcXVvLCBpZCB2aXggdmlyaXMgZXF1aWRlbSBwZXJjaXBpdC4gRWkgdWxsdW0gYWVxdWUgYWxpZW51bSB2aXMsIHBvc3NpdCBhYmhvcnJlYW50IHZpeCB1dC5gXG4gICAgICAgIHZvdGVDb3VudDogMTAsXG4gICAgICAgIGlWb3RlOiAwLFxuICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxuICAgICAgICBpc0Zhdm9yaXRlOnRydWVcbiAgICB9XG5cbiAgICBvbkZhdm9yaXRlQ2hhbmdlKCRldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XG4gICAgfVxuXG4gICAgb25VcENoYW5nZSgkZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xuICAgIH1cblxuICAgIGlzVXAgPSBmYWxzZTtcbiAgICBcbiAgICBpc0Zhdm9yaXRlID0gZmFsc2U7XG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMuaXNVcCA9ICF0aGlzLmlzVXA7XG4gICAgICAgIHRoaXMuaXNGYXZvcml0ZSA9ICF0aGlzLmlzRmF2b3JpdGU7XG4gICAgfVxuXG4gICAgdGl0bGUgPSBcIkFuZ3VsYXIgQXBwXCI7XG59Il19