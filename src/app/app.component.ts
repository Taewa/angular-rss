import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleItem} from './interfaces/article-list';


interface RssResult {
    feed: any;
    items: ArticleItem[];
    status: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public rssApi = 'https://api.rss2json.com/v1/api.json';
    public articles: ArticleItem[] = [];

    public isErr = false;
    public errInfo: any;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(
        private http: HttpClient
    ) {

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Methods
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    search(val: string) {
        // TEST param : https://blog.angular.io/feed
        const params = {
            params: {
                'rss_url': val
            }
        };

        this.http.get(this.rssApi, params)
            .subscribe(
                (res: RssResult) => {
                    this.isErr = false;
                    this.articles = res.items;
                },
                (err) => {
                    this.isErr = true;
                    this.errInfo = err;
                });
    }
}
