import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
{
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule'
}, 
// Agency  
{
    path: 'agencyprofile',
    loadChildren: './admin/agency/agencyprofile/agencyprofile.module#AgencyprofileModule'
},
{
  path: 'users',
  loadChildren: './admin/agency/users/users.module#UsersModule'
},
{
  path: 'setting',
  loadChildren: './admin/agency/setting/setting.module#SettingModule'
},
//Client
{
  path: 'agencies',
  loadChildren: './admin/client/agencies/agencies.module#AgenciesModule'
},
 {
  path: 'corporateclients',
  loadChildren: './admin/client/corporateclients/corporateclients.module#CorporateclientsModule'
},

 {
  path: 'distributors',
  loadChildren: './admin/client/distributors/distributors.module#DistributorsModule'
 },
{
  path: 'privateclient',
  loadChildren: './admin/client/privateclient/privateclient.module#PrivateclientModule'
}, 
//Finance
{
  path: 'bill',
  loadChildren: './admin/finance/bill/bill.module#BillModule'
}, 
//Management
{
  path: 'management',
  loadChildren: './admin/management/management.module#ManagementModule'
},
//SecuritiesManagement
{
  path: 'cashing',
  loadChildren: './admin/securitiesmanagement/cashing/cashing.module#CashingModule'
},
{
  path: 'securitiesinstances',
  loadChildren: './admin/securitiesmanagement/securitiesinstances/securitiesinstances.module#SecuritiesinstancesModule'
},
//
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  }
];