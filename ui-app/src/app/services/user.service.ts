import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpCaller } from '../helpers/httpCaller';
import { HttpCallOptions } from '../models/httpCallOptions';
import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpCaller: HttpCaller) { }

  getUserDetails(username: string) {
const baseUrl = `${environment.apiUrl}`;
    const httpCallOptions: HttpCallOptions = { url: baseUrl+"/users/"+username, method: "get" } as HttpCallOptions;
    return this.httpCaller.call<User>(httpCallOptions);
  }

  getAll(){
    const httpCallOptions: HttpCallOptions = {url: baseUrl+"/users", method:"get"} as HttpCallOptions;
    return this.httpCaller.call<User[]>(httpCallOptions);
  }

}
