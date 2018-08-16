import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgencyprofileRoutingModule } from './agencyprofile-routing.module';
import { AgencyprofileComponent } from './agencyprofile.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    AgencyprofileRoutingModule
  ],

  declarations: [AgencyprofileComponent]
})
export class AgencyprofileModule {}
