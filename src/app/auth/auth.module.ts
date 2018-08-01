import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, LockScreenComponent, ForgotPasswordComponent,LogoutComponent]
})
export class AuthModule { }
