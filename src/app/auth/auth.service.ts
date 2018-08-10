import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// tslint:disable-next-line:class-name
interface myData {
  success: boolean;
  message: string;
}

@Injectable()
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(CompanyCode, inputEmail, inputPass) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('//localhost/api/auth.php', {
      CompanyCode,
      inputEmail,
      inputPass

    });
  }

}
