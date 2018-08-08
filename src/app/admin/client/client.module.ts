import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesComponent } from '../Client/agencies/agencies.component';
import { DistributorsComponent } from '../Client/distributors/distributors.component';
import { CorporateclientsComponent } from '../Client/corporateclients/corporateclients.component';
import { PrivateclientComponent } from '../client/privateclient/privateclient.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgenciesComponent, DistributorsComponent, CorporateclientsComponent, PrivateclientComponent]
})
export class ClientModule { }
