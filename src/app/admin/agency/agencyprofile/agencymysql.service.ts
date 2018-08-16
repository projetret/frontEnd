import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AgencyMysqlService {
  constructor(public _http: Http) {}

  // tslint:disable-next-line:max-line-length
  public addMysqlUserDatas(
    USER_ID: number,
    COMPANYCODE: string,
    EMAIL: string,
    REG_DATE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    SALT: string,
    PASSWORD: string,
    ROLECODE: string,
    COMPANY_NAME: string,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME_LEGACY: string,
    VAT_NUMBER: string,
    IATA_NUMBER: string,
    TITLE: string,
    PHONE1: number,
    PHONE2: number,
    FAX: number,
    WEBSITE: string,
    LANGUAGE: string,
    PRICE_FORMAT: string,
    DATE_FORMAT: string,
    TIME_ZONE: string,
    TIME_FORMAT: string,
    LOGO: string
  ) {
    const url = 'http://localhost/api/agencyprofile/post_agencyprofile.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          USER_ID: USER_ID,
          COMPANYCODE: COMPANYCODE,
          EMAIL: EMAIL,
          REG_DATE: REG_DATE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          SALT: SALT,
          PASSWORD: PASSWORD,
          ROLECODE: ROLECODE,
          COMPANY_NAME: COMPANY_NAME,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME_LEGACY: FULL_NAME_LEGACY,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          PHONE1: PHONE1,
          PHONE2: PHONE2,
          FAX: FAX,
          WEBSITE: WEBSITE,
          LANGUAGE: LANGUAGE,
          PRICE_FORMAT: PRICE_FORMAT,
          DATE_FORMAT: DATE_FORMAT,
          TIME_ZONE: TIME_ZONE,
          TIME_FORMAT: TIME_FORMAT,
          LOGO: LOGO
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }
  public UpdateMysqlUserDatas(
    /*  _COMPANY_NAME: string,
    _COMPANYCODE: string, */
    _STREET: string,
    _CITY: string,
    _POSTAL_CODE: number,
    _COUNTRY: string,
    _FULL_NAME_LEGACY: string,
    _VAT_NUMBER: string,
    _IATA_NUMBER: string,
    _TITLE: string,
    _FIRST_NAME: string,
    _MIDDLE_NAME: string,
    _LAST_NAME: string,
    _PHONE1: number,
    _PHONE2: number,
    _FAX: number,
    _WEBSITE: string,
    _EMAIL: string,
    _LANGUAGE: string,
    _PRICE_FORMAT: string,
    _DATE_FORMAT: string,
    _TIME_ZONE: string,
    _TIME_FORMAT: string,
    _LOGO: string
  ) {
    const url = 'http://localhost/api/agencyprofile/update_agencyprofile.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        {
          /*   COMPANY_NAME: _COMPANY_NAME,
        COMPANYCODE: _COMPANYCODE, */
          STREET: _STREET,
          CITY: _CITY,
          POSTAL_CODE: _POSTAL_CODE,
          COUNTRY: _COUNTRY,
          FULL_NAME_LEGACY: _FULL_NAME_LEGACY,
          VAT_NUMBER: _VAT_NUMBER,
          IATA_NUMBER: _IATA_NUMBER,
          TITLE: _TITLE,
          FIRST_NAME: _FIRST_NAME,
          MIDDLE_NAME: _MIDDLE_NAME,
          LAST_NAME: _LAST_NAME,
          PHONE1: _PHONE1,
          PHONE2: _PHONE2,
          FAX: _FAX,
          WEBSITE: _WEBSITE,
          EMAIL: _EMAIL,
          LANGUAGE: _LANGUAGE,
          PRICE_FORMAT: _PRICE_FORMAT,
          DATE_FORMAT: _DATE_FORMAT,
          TIME_ZONE: _TIME_ZONE,
          TIME_FORMAT: _TIME_FORMAT,
          LOGO: _LOGO
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }
  public getMysqlUsersDatas() {
    return (
      this._http
        .get('http://localhost/api/agencyprofile/get_agencyprofile.php')
        /*.do(x => console.log(x))**/
        .map(rep => rep.json())
    );
  }
}
