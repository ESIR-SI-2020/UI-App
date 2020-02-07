import {Component, Input} from '@angular/core';
import {Article} from '../models/article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

// @ts-ignore
export class ArticleComponent {
    @Input() article: Article;
}