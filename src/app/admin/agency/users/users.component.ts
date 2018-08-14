import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MysqlService } from './mysql.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersMysql: User[];
constructor(private _mysqlService: MysqlService) { }
  ngOnInit() {
    this.getUsersMysql();
             }

  private getUsersMysql() {
    this._mysqlService
      .getMysqlUsersDatas()
      .subscribe(
        res => (this.usersMysql = res),
        err => console.error(err.status)
      );
  }
  }
