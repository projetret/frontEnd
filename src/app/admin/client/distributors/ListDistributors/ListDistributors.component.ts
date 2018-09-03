import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MysqlDistService } from './mysqlDist.service';

@Component({
  moduleId: module.id,
  selector: 'app-ListDistributors',
  templateUrl: './ListDistributors.component.html',
  styleUrls: ['./ListDistributors.component.scss']
})
export class ListDistributorsComponent implements OnInit {
  usersMysql: User[];
  constructor(private _mysqlService: MysqlDistService) {}
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
