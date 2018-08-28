import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ClientMysqlService {
  constructor(public _http: Http) {}
  // Add agencies Client
  public addAgenciesClient(
    COMPANY: string,
    TRADE_REGISTER_NUMBER: number,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME: string,
    VAT_NUMBER: string,
    IATA_NUMBER: number,
    TITLE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    PHONE_1: number,
    PHONE_2: number,
    FAX: number,
    WEB_SITE: string,
    E_MAIL: string,
    TYPE_CLIENT: string
  ) {
    const url = 'http://localhost/api/client/Agencies_clients.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          COMPANY: COMPANY,
          TRADE_REGISTER_NUMBER: TRADE_REGISTER_NUMBER,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME: FULL_NAME,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          PHONE_1: PHONE_1,
          PHONE_2: PHONE_2,
          FAX: FAX,
          WEB_SITE: WEB_SITE,
          E_MAIL: E_MAIL,
          TYPE_CLIENT: TYPE_CLIENT
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }
  // add Distrubitor Client
  public addDistrubitorClient(
    COMPANY: string,
    TRADE_REGISTER_NUMBER: number,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME: string,
    VAT_NUMBER: string,
    IATA_NUMBER: number,
    TITLE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    PHONE_1: number,
    PHONE_2: number,
    FAX: number,
    WEB_SITE: string,
    E_MAIL: string,
    TYPE_CLIENT: string
  ) {
    const url = 'http://localhost/api/client/Distrubitor_clients.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          COMPANY: COMPANY,
          TRADE_REGISTER_NUMBER: TRADE_REGISTER_NUMBER,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME: FULL_NAME,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          PHONE_1: PHONE_1,
          PHONE_2: PHONE_2,
          FAX: FAX,
          WEB_SITE: WEB_SITE,
          E_MAIL: E_MAIL,
          TYPE_CLIENT: TYPE_CLIENT
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }
  // add corporate clients
  public addCorporateClient(
    COMPANY: string,
    TRADE_REGISTER_NUMBER: number,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME: string,
    VAT_NUMBER: string,
    IATA_NUMBER: number,
    TITLE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    PHONE_1: number,
    PHONE_2: number,
    FAX: number,
    WEB_SITE: string,
    E_MAIL: string,
    TYPE_CLIENT: string
  ) {
    const url = 'http://localhost/api/client/Corporate_clients.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          COMPANY: COMPANY,
          TRADE_REGISTER_NUMBER: TRADE_REGISTER_NUMBER,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME: FULL_NAME,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          PHONE_1: PHONE_1,
          PHONE_2: PHONE_2,
          FAX: FAX,
          WEB_SITE: WEB_SITE,
          E_MAIL: E_MAIL,
          TYPE_CLIENT: TYPE_CLIENT
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }
  // add private clients
  public addPrivateClient(
    COMPANY: string,
    TRADE_REGISTER_NUMBER: number,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME: string,
    VAT_NUMBER: string,
    IATA_NUMBER: number,
    TITLE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    PHONE_1: number,
    PHONE_2: number,
    FAX: number,
    WEB_SITE: string,
    E_MAIL: string,
    TYPE_CLIENT: string
  ) {
    const url = 'http://localhost/api/client/Private_clients.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          COMPANY: COMPANY,
          TRADE_REGISTER_NUMBER: TRADE_REGISTER_NUMBER,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME: FULL_NAME,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          PHONE_1: PHONE_1,
          PHONE_2: PHONE_2,
          FAX: FAX,
          WEB_SITE: WEB_SITE,
          E_MAIL: E_MAIL,
          TYPE_CLIENT: TYPE_CLIENT
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }

  // tslint:disable-next-line:max-line-length
 /*  public addMysqlUserDatas(
    COMPANY: string,
    TRADE_REGISTER_NUMBER: number,
    STREET: string,
    CITY: string,
    POSTAL_CODE: number,
    COUNTRY: string,
    FULL_NAME: string,
    VAT_NUMBER: string,
    IATA_NUMBER: number,
    TITLE: string,
    FIRST_NAME: string,
    MIDDLE_NAME: string,
    LAST_NAME: string,
    PHONE_1: number,
    PHONE_2: number,
    FAX: number,
    WEB_SITE: string,
    E_MAIL: string,
    TYPE_CLIENT: string
  ) {
    const url = 'http://localhost/api/client/post_clients.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        // tslint:disable-next-line:max-line-length
        {
          COMPANY: COMPANY,
          TRADE_REGISTER_NUMBER: TRADE_REGISTER_NUMBER,
          STREET: STREET,
          CITY: CITY,
          POSTAL_CODE: POSTAL_CODE,
          COUNTRY: COUNTRY,
          FULL_NAME: FULL_NAME,
          VAT_NUMBER: VAT_NUMBER,
          IATA_NUMBER: IATA_NUMBER,
          TITLE: TITLE,
          FIRST_NAME: FIRST_NAME,
          MIDDLE_NAME: MIDDLE_NAME,
          LAST_NAME: LAST_NAME,
          PHONE_1: PHONE_1,
          PHONE_2: PHONE_2,
          FAX: FAX,
          WEB_SITE: WEB_SITE,
          E_MAIL: E_MAIL,
          TYPE_CLIENT: TYPE_CLIENT
        },
        { headers: headers }
      )
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  } */
  public UpdateMysqlUserDatas(
    _COMPANY: string,
    _TRADE_REGISTER_NUMBER: number,
    _STREET: string,
    _CITY: string,
    _POSTAL_CODE: number,
    _COUNTRY: string,
    _FULL_NAME_OF_LEGAL_ENTITY: string,
    _VAT_NUMBER: number,
    _IATA_NUMBER: number,
    _TITLE: string,
    _FIRST_NAME: string,
    _MIDDLE_NAME: string,
    _LAST_NAME: string,
    _PHONE_1: number,
    _PHONE_2: number,
    _FAX: number,
    _WEB_SITE: string,
    _E_MAIL: string,
    _TYPE_CLIENT: string
  ) {
    const url = 'http://localhost/api/agencyprofile/update_agencyprofile.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http
      .post(
        url,
        {
          COMPANY: _COMPANY,
          TRADE_REGISTER_NUMBER: _TRADE_REGISTER_NUMBER,
          STREET: _STREET,
          CITY: _CITY,
          POSTAL_CODE: _POSTAL_CODE,
          COUNTRY: _COUNTRY,
          FULL_NAME_OF_LEGAL_ENTITY: _FULL_NAME_OF_LEGAL_ENTITY,
          VAT_NUMBER: _VAT_NUMBER,
          IATA_NUMBER: _IATA_NUMBER,
          TITLE: _TITLE,
          FIRST_NAME: _FIRST_NAME,
          MIDDLE_NAME: _MIDDLE_NAME,
          LAST_NAME: _LAST_NAME,
          PHONE_1: _PHONE_1,
          PHONE_2: _PHONE_2,
          FAX: _FAX,
          WEB_SITE: _WEB_SITE,
          E_MAIL: _E_MAIL,
          TYPE_CLIENT: _TYPE_CLIENT
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
