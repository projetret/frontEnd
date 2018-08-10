import { Component, OnInit } from '@angular/core';
import { User } from './api/user';
import { MysqlService } from './mysql.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersMysql: User[];
  usersLocal = [];
  textLocal: String;

  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
 // this.getTextLocal();
    this.getUsersMysql();
 // this.getUsersLocal();
             }

  private getUsersMysql() {
    this._mysqlService
      .getMysqlUsersDatas()
      .subscribe(
        res => (this.usersMysql = res),
        err => console.error(err.status)
      );
  }

/*   private getUsersLocal() {
    this._mysqlService
      .getLocalUsersDatas()
      .subscribe(
        res => (this.usersLocal = res),
        err => console.error(err.status)
      );
  }

  private getTextLocal() {
    this._mysqlService
      .getLocalTextDatas()
      .subscribe(
        res => (this.textLocal = res),
        err => console.error(err.status)
      );
  } */
  }
