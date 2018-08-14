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
  public UpdateMysqlProfileDatas(
    COMPANY_NAME: string,
    COMPANYCODE: string,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME_LEGACY: string,
    VAT_NUMBER: string,
    IATA_NUMBER: string,
    TITLE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    PHONE1: number,
    PHONE2: number,
    FAX: number,
    WEBSITE: string,
    EMAIL: string,
    LANGUAGE: string,
    PRICE_FORMAT: string,
    DATE_FORMAT: string,
    TIME_ZONE: string,
    TIME_FORMAT: string,
    LOGO: string

  ) {
    const url = 'http://localhost/api/agencyprofile/update_agencyprofile.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          COMPANY_NAME: COMPANY_NAME,
          COMPANYCODE: COMPANYCODE,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME_LEGACY: FULL_NAME_LEGACY,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          PHONE1: PHONE1,
          PHONE2: PHONE2,
          FAX: FAX,
          WEBSITE: WEBSITE,
          EMAIL: EMAIL,
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

  public getMysqlUsersDatas() {
    return (
      this._http
        .get('http://localhost/api/agencyprofile/get_agencyprofile.php')
        /*.do(x => console.log(x))**/
        .map(rep => rep.json())
    );
  }
}
