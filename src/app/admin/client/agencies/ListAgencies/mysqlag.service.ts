import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MysqlagService {
  Agencies = [];
  constructor(public _http: Http) {}
  checkMe: any;
  public getMysqlUsersDatas() {
    return this._http
      .get('http://localhost/api/client/get_clients.php')
      .map(res => {
        this.checkMe = res;

        if (this.checkMe._body !== '0') {
          return res.json();
        }
      });
  }
  getAgency(id) {
    return this._http
      .post('http://localhost/api/client/selectoneagency.php/', { id: id })
      .map(res => res.json());
  }
  deleteAgency(id) {
    window.alert('Are you sure');
    return this._http
      .post('http://localhost/api/client/deleteagency.php/', { id: id })
      .map(() => this.getMysqlUsersDatas());
  }
  updateAgency(info) {
    return this._http
      .post('http://localhost/api/client/update.php/', info)
      .map(() => '');
  }
}
