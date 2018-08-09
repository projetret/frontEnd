import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Injectable()
export class UsersService {
  users = [];
  constructor(private _http: Http) { }
  checkMe: any;
  getUsers() {
    return this._http.get('http://localhost/api/users/select.php/')
      .map(res => {
        this.checkMe = res;

        if (this.checkMe._body !== '0') {
           return res.json( ) ;
        }
 });
  }
  addUser(info) {
    return this._http.post('http://localhost/api/users/insert.php', info)
      .map(() => '');
  }
  getUser(id) {
    return this._http.post('http://localhost/api/users/selectone.php/', {'id': id})
      .map(res => res.json());
  }
  deleteUser(id) {
    return this._http.post('http://localhost/api/users/delete.php/', {'id': id})
      .map(() => this.getUsers());
  }
  updateUser(info) {
    return this._http.post('http://localhost/api/users/update.php/', info)
      .map(() => '');
  }
}
