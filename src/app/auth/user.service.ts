import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:class-name
interface myData {
  message: string;
  success: boolean;
}

// tslint:disable-next-line:class-name
interface isLoggedIn {
  status: boolean;
}
// tslint:disable-next-line:class-name
interface logoutStatus {
  success: boolean;
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('http://localhost/api/database.php');
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost/api/isloggedin.php');
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost/api/logout.php');
  }

}
