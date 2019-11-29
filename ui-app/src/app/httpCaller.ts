import { ActivatedRoute, Router } from '@angular/router';
import { HttpCallOptions } from './httpCallOptions';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable(
  { providedIn: 'root' }
)
export class HttpCaller {

  baseUrl = 'https://pokeapi.co/api/v2';
  defaultHeaders = new HttpHeaders({
    // "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  });

  constructor(private http: HttpClient, private router: Router) { }

  async call<T>(options: HttpCallOptions): Promise<T> {
    let completeUrl = this.baseUrl.concat(options.url);

    let completeOptions = {
      body: options.body ? JSON.parse(options.body) : undefined,
      headers: options.headers ? options.headers : this.defaultHeaders,
      responseType: 'json' as 'json' // hack for weird typing
    };

    let response: Promise<T> = this.http.request<T>(options.method, completeUrl, completeOptions).toPromise()
      // .catch<T>(error => this.handleError(error));
      .catch<T>(this.handleError.bind(this));


    return await response;
  }



  private handleError<T>(error: HttpErrorResponse): T {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.log(`error status : ${error.status} ${error.statusText}`);
      switch (error.status) {
        case 401:      //login
          this.router.navigateByUrl("/login");
          break;
        case 403:     //forbidden
          // this.router.navigateByUrl("/unauthorized");
          alert("unauthorized")
          break;
        case 404:
          this.router.navigate(['notfound']);
      }
    }
    console.error("something else happened");
    throw error;
  };

}