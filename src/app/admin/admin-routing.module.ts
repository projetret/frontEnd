import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgencyprofileComponent } from './Agency/agencyprofile/agencyprofile.component';
import { SettingComponent } from './Agency/setting/setting.component';
import { UsersComponent } from './Agency/users/users.component';
import { AgenciesComponent } from './Client/agencies/agencies.component';
import { CorporateClientsComponent } from './Client/corporate-clients/corporate-clients.component';
import { DistributorsComponent } from './Client/distributors/distributors.component';
import { PrivateclientsComponent } from './Client/privateclients/privateclients.component';
import { BillComponent } from './Finance/bill/bill.component';


const routes: Routes = [
  {
    path: 'agency',
    children: [
      {
        path: 'agencyprofile',
        component: AgencyprofileComponent,
        data: {
          title: 'agency profile'
        }
      },   
      
      {
        path: 'setting',
        component: SettingComponent,
        data: {
          title: 'Setting '
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users '
        }
      }
    ]
  },
  {
    path: 'client',
    children: [
      {
        path: 'agencies',
        component: AgenciesComponent,
        data: {
          title: 'Agencies'
        }
      },   
      
      {
        path: 'corporate-clients',
        component: CorporateClientsComponent,
        data: {
          title: 'Corporate Clients '
        }
      },
      {
        path: 'distributors',
        component: DistributorsComponent,
        data: {
          title: 'Distributors '
        }
      },
      {
        path: 'privateclients',
        component: PrivateclientsComponent,
        data: {
          title: 'Private Clients '
        }
      }
    ]
  },
  {
    path: 'finance',
    children: [
      {
        path: 'bill',
        component: BillComponent,
        data: {
          title: 'Bill'
        }
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
