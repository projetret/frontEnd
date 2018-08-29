import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MysqlagService } from './mysqlag.service';

@Component({
  moduleId: module.id,
  selector: 'app-ListAgencies',
  templateUrl: './ListAgencies.component.html',
  styleUrls: ['./ListAgencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  usersMysql: User[];
  constructor(private _mysqlService: MysqlagService) {}
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
