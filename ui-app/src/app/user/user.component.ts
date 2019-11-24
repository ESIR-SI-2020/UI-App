import { HttpCallOptions } from './../httpCallOptions';
import { HttpCaller } from './../httpCaller';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {


  constructor(private httpCaller: HttpCaller,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {

  }

}