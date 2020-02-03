import { User } from '../models/user';
import { HttpCallOptions } from '../models/httpCallOptions';
import { HttpCaller } from '../helpers/httpCaller';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../services/user.service'


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user: any

  constructor(private userService: UserService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {

    this.renderUserDetails();

  }


  renderUserDetails(){
    try{
      let userId: string; //changer par l'Id
      this.route.paramMap.subscribe(paramMap =>{
        userId = paramMap.get('username')
        console.log("userID: "+userId);
      })
      this.userService.getUserDetails(userId).then(data => this.user = data)
      console.log("user: "+this.user);
    }catch(error){
      console.error(error);
    }
  }


}