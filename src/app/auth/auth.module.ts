import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

import { LoginComponent } from './login.component';
import { UserRegistrationComponent } from './user-registration.component';
import { ForgotPasswordComponent } from './forgot-password.component';

import { AuthAppRoutingModule } from "./auth-app-routing.module";

@NgModule({
  declarations: [AuthComponent, LoginComponent, UserRegistrationComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthAppRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
