import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgencyprofileComponent } from './agencyprofile/agencyprofile.component';
import { UsersComponent } from './users/users.component';
import { SettingComponent } from './setting/setting.component';
const routes: Routes = [
  {
    path: 'Agencyprofile',
     component: AgencyprofileComponent,
    data: {
      title: 'Agencyprofile'
    },
  },
  {
    path: 'users',
     component: UsersComponent,
    data: {
      title: 'users'
    },
  },
  {
    path: 'Settings',
     component: SettingComponent,
    data: {
      title: 'Settings'
    },
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule { }

