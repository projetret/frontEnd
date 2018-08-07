import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyprofileRoutingModule } from './agencyprofile-routing.module';
import { AgencyprofileComponent } from './agencyprofile.component';

@NgModule({
  imports: [
    CommonModule,
    AgencyprofileRoutingModule
  ],
  declarations: [AgencyprofileComponent]
})
export class AgencyprofileModule { }
