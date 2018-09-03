import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MysqlPrivateService } from './mysqlPrivate.service';

@Component({
  moduleId: module.id,
  selector: 'app-ListPrivate',
  templateUrl: './ListPrivate.component.html',
  styleUrls: ['./ListPrivate.component.scss']
})
export class ListPrivateComponent implements OnInit {
  usersMysql: User[];
  constructor(private _mysqlService: MysqlPrivateService) {}
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
