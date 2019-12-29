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

  user: User

  constructor(private userService: UserService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {

    try{
      let userId: string; //changer par l'Id
      this.route.paramMap.subscribe(paramMap =>{
        userId = paramMap.get('userId')
      })
      this.userService.getUserDetails(userId).then(data => this.user = data)
    }catch(error){
      console.error(error);
    }

  }

}