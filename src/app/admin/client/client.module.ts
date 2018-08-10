import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesComponent } from './agencies/agencies.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { CorporateclientsComponent } from './corporateclients/corporateclients.component';
import { PrivateclientComponent } from './privateclient/privateclient.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgenciesComponent, DistributorsComponent, CorporateclientsComponent, PrivateclientComponent]
})
export class ClientModule { }
