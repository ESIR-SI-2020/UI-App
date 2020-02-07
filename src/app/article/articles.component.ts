import {Component, OnInit} from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticlesComponent implements OnInit {

    isLoading: boolean ;
    error: string;
    articles: any;

    constructor(
        private articleService: ArticleService
    ) { }

    ngOnInit(): void {
        this.isLoading = true;
        try {
            this.articles = this.articleService.findAll();
        } catch (error) {
            this.error = error.error;
        } finally {
            this.isLoading = false;
        }
    }
}