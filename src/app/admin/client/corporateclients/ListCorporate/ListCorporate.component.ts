import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MysqlCorService } from './mysqlCor.service';

@Component({
  moduleId: module.id,
  selector: 'app-ListCorporate',
  templateUrl: './ListCorporate.component.html',
  styleUrls: ['./ListCorporate.component.scss']
})
export class ListCorporateComponent implements OnInit {
  usersMysql: User[];
  constructor(private _mysqlService: MysqlCorService) {}
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
