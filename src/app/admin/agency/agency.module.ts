import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyprofileComponent } from '../Agency/agencyprofile/agencyprofile.component';
import { UsersComponent } from '../Agency/users/users.component';
import { SettingComponent } from '../Agency/setting/setting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgencyprofileComponent, UsersComponent, SettingComponent]
})
export class AgencyModule { }
