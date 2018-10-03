import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SearchPanelComponent} from './components/search-panel/search-panel.component';
import { ArticleListComponent } from './components/article-list/article-list.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchPanelComponent,
        ArticleListComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
