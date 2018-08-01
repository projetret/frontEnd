import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './agencies/agencies.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { CorporateClientsComponent } from './corporate-clients/corporate-clients.component';
import { PrivateclientsComponent } from './privateclients/privateclients.component';
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
    path: 'CorporateClients',
     component: CorporateClientsComponent,
    data: {
      title: 'CorporateClients'
    },    
  },
  {
    path: 'Privateclients',
     component: PrivateclientsComponent,
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




