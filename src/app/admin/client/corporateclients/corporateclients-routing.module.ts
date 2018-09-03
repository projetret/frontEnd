import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateclientsComponent } from './corporateclients.component';
import { ListCorporateComponent } from './ListCorporate/ListCorporate.component';

const routes: Routes = [
  {
    path: '',
    component: CorporateclientsComponent
  },
  {
    path: 'ListCorporate',
    component: ListCorporateComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateclientsRoutingModule { }
