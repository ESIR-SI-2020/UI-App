import { Component, OnInit } from '@angular/core';
import { HttpCaller } from '../helpers/httpCaller';
import { ActivatedRoute } from '@angular/router';
import { articleService } from '../services/article.service';


@Component({
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isLoading: boolean ;
  error: string;
  article: any;

  constructor(private httpCaller: HttpCaller,
    private route: ActivatedRoute,
    private articleService: articleService
  ) { }


  ngOnInit() {
    this.fetchArticles()
  }

  fetchArticles() {
    this.isLoading = true
    try {

      this.article = this.articleService.findAll();

    } catch (error) {
      this.error = error.error
    }
    finally {
      this.isLoading = false
      // setTimeout(() => {
      //   this.isLoading = false
      // }, 5000);
    }
  }
}


