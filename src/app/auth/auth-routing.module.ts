import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LockScreenComponent } from "./lock-screen/lock-screen.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
        data: {
          title: 'Forgot Password'
        }
      },   
      
      {
        path: 'lockscreen',
        component: LockScreenComponent,
        data: {
          title: 'Lock Screen '
        }
      },   
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login '
        }
      },
      {
        path: 'logout',
        component: LogoutComponent
      }       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
