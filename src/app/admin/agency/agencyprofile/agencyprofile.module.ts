import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyprofileRoutingModule } from './agencyprofile-routing.module';
import { AgencyprofileComponent } from './agencyprofile.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    AgencyprofileRoutingModule
  ],

  declarations: [AgencyprofileComponent]
})
export class AgencyprofileModule {}
