import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './agencies/agencies.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { CorporateclientsComponent } from './corporateclients/corporateclients.component';
import { PrivateclientComponent } from './privateclient/privateclient.component';
const routes: Routes = [
  {
    path: 'Agencies',
     component: AgenciesComponent,
    data: {
      title: 'Agencies'
    },    
  },
  {
    path: 'Distributors',
     component: DistributorsComponent,
    data: {
      title: 'Distributors'
    },    
  },
  {
    path: 'CorporateClient',
     component: CorporateclientsComponent,
    data: {
      title: 'CorporateClients'
    },    
  },
  {
    path: 'Privateclient',
     component: PrivateclientComponent,
    data: {
      title: 'Privateclients'
    },    
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule { }




