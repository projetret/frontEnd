import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyprofileComponent } from './agencyprofile/agencyprofile.component';
import { UsersComponent } from './users/users.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgencyprofileComponent, UsersComponent, SettingComponent]
})
export class AgencyModule { }
