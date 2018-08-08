import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyprofileComponent } from './agencyprofile.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyprofileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyprofileRoutingModule { }
