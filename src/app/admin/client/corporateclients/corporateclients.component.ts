import { Component, OnInit } from '@angular/core';
import { ClientMysqlService} from '../clientmysql.service';
import { Client} from '../client.model';
@Component({
  selector: 'app-corporateclients',
  templateUrl: './corporateclients.component.html',
  styleUrls: ['./corporateclients.component.scss']
})
export class CorporateclientsComponent implements OnInit {
 ClientMysql: Client[];
  constructor(private _mysqlService: ClientMysqlService) {}
  ngOnInit() {}

  addClient(
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
    // tslint:disable-next-line:max-line-length
    if (this._mysqlService.addCorporateClient(COMPANY, TRADE_REGISTER_NUMBER, STREET, CITY, POSTAL_CODE, COUNTRY, FULL_NAME, VAT_NUMBER, IATA_NUMBER, TITLE, FIRST_NAME, MIDDLE_NAME, LAST_NAME, PHONE_1, PHONE_2, FAX, WEB_SITE, E_MAIL, TYPE_CLIENT)) {
      alert('Data Inserted Successfully');
    }
  }
}
