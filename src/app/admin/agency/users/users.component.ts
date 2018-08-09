import { Component, OnInit } from '@angular/core';
import {UsersService} from './user.service';
import { User } from './user';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
