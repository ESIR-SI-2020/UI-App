import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 token: string;

  constructor(private http: HttpClient, private router: Router) { }




  login(username: string, password: string){
    let params = new HttpParams()
    .set('username', username)
    .set('password', password);

    // return this.http.get<any>(`${environment.apiUrl}/authenticate`, {params})
    return this.http.get<any>(`${environment.apiUrl}/authenticate`)
        .pipe(map((res: any) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.token = res.token;
          this.router.navigateByUrl("/pokemons");
          return this.token;
          // return res
        }));
  }

  logout(){
    this.token = null;
    this.router.navigateByUrl("/login");
  }

  isAuthorized() {
    // Just check if token exists
    // If not, user has never logged in current session
    return Boolean(this.token);
  }

}
