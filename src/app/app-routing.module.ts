import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { LockScreenComponent } from './auth/lock-screen/lock-screen.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES }/* ,
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'logout',component: LogoutComponent } ,
  { path: 'lockscreen',component: LockScreenComponent } , 
  { path: 'error', loadChildren: './system/server-error/server-error.module#ServerErrorModule' },
  { path: 'access-denied', loadChildren: './system/access-denied/access-denied.module#AccessDeniedModule' },
  { path: 'not-found', loadChildren: './system/not-found/not-found.module#NotFoundModule' } */
  /* { path: '**', redirectTo: 'not-found' }   */
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
