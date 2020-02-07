import { HttpCaller } from '../helpers/httpCaller';
import { HttpCallOptions } from '../models/httpCallOptions';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


const httpOptions = new HttpHeaders({
    // "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    // "x-rapidapi-key": "ff942a6c0emshac1c8821c82f00bp11636cjsnc076cd832ae2"
});

// const baseUrl = `${environment.pokemonUrl}`;

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    articles: any;

    findAll() {
        const article1 = {id : '1', url : 'site1.com', owner : 'Matthias'};
        const article2 = {id : '2', url : 'supersite2.com', owner : 'Clément'};
        const article3 = {id : '3', url : 'site3.com', owner : 'Nobody'};
        return [article1, article2, article3];
    }
}
