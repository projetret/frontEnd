import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesComponent } from '../Client/agencies/agencies.component';
import { DistributorsComponent } from '../Client/distributors/distributors.component';
import { CorporateClientsComponent } from '../Client/corporate-clients/corporate-clients.component';
import { PrivateclientsComponent } from '../Client/privateclients/privateclients.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgenciesComponent, DistributorsComponent, CorporateClientsComponent, PrivateclientsComponent]
})
export class ClientModule { }
