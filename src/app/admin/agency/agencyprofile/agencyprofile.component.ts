import { Component, OnInit } from '@angular/core';
import { Agency } from './agencyprofile';
import { AgencyMysqlService } from './agencymysql.service';

@Component({
  moduleId: module.id,
  selector: 'app-agencyprofile',
  templateUrl: './agencyprofile.component.html',
  styleUrls: ['./agencyprofile.component.scss']
})
export class AgencyprofileComponent implements OnInit {
  agencyMysql: Agency[];
  constructor(private _mysqlService: AgencyMysqlService) {}
  ngOnInit() {
    this.getUsersMysql();
  }
  // tslint:disable-next-line:max-line-length
  addUser(USER_ID: number, COMPANYCODE: string, EMAIL: string, REG_DATE: string, FIRST_NAME: string, MIDDLE_NAME: string, LAST_NAME: string, SALT: string, PASSWORD: string, ROLECODE: string, COMPANY_NAME: string, STREET: string, CITY: string, POSTAL_CODE: number, COUNTRY: string, FULL_NAME_LEGACY: string, VAT_NUMBER: string, IATA_NUMBER: string, TITLE: string, PHONE1: number, PHONE2: number, FAX: number, WEBSITE: string, LANGUAGE: string, PRICE_FORMAT: string, DATE_FORMAT: string, TIME_ZONE: string, TIME_FORMAT: string, LOGO: string) {
    // tslint:disable-next-line:max-line-length
    if (this._mysqlService.addMysqlUserDatas(USER_ID, COMPANYCODE, EMAIL, REG_DATE, FIRST_NAME, MIDDLE_NAME, LAST_NAME, SALT, PASSWORD, ROLECODE, COMPANY_NAME, STREET, CITY, POSTAL_CODE, COUNTRY, FULL_NAME_LEGACY, VAT_NUMBER, IATA_NUMBER, TITLE, PHONE1, PHONE2, FAX, WEBSITE, LANGUAGE, PRICE_FORMAT, DATE_FORMAT, TIME_ZONE, TIME_FORMAT, LOGO)) {
      alert('Data Inserted Successfully');
    }
  }
  // tslint:disable-next-line:max-line-length
  UpdateProfile(COMPANY_NAME: string, COMPANYCODE: string, STREET: string, CITY: string, POSTAL_CODE: number, COUNTRY: string, FULL_NAME_LEGACY: string, VAT_NUMBER: string, IATA_NUMBER: string, TITLE: string, FIRST_NAME: string, MIDDLE_NAME: string, LAST_NAME: string, PHONE1: number, PHONE2: number, FAX: number, WEBSITE: string, EMAIL: string, LANGUAGE: string, PRICE_FORMAT: string, DATE_FORMAT: string, TIME_ZONE: string, TIME_FORMAT: string, LOGO: string ) {
    // tslint:disable-next-line:max-line-length
    if (this._mysqlService.UpdateMysqlProfileDatas(COMPANY_NAME, COMPANYCODE, STREET, CITY, POSTAL_CODE, COUNTRY, FULL_NAME_LEGACY, VAT_NUMBER, IATA_NUMBER, TITLE, FIRST_NAME, MIDDLE_NAME, LAST_NAME, PHONE1, PHONE2, FAX, WEBSITE, EMAIL, LANGUAGE, PRICE_FORMAT, DATE_FORMAT, TIME_ZONE, TIME_FORMAT, LOGO )) {
      alert('Profile Updated Successfully');
    }
  }
  private getUsersMysql() {
    this._mysqlService
      .getMysqlUsersDatas()
      .subscribe(
        res => (this.agencyMysql = res),
        err => console.error(err.status)
      );
  }
}


