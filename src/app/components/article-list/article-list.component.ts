import {Component, Input, OnInit} from '@angular/core';
import {ArticleItem} from '../../interfaces/article-list';
@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Properties
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @Input() data: ArticleItem;

    constructor() {
    }

    ngOnInit() {
    }

}
