import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './registration/user-registration.component';
import { DoctorComponent } from './doctors/doctor.component';
import { PatientComponent } from './patients/patient.component';
import { HospitalComponent } from './hospitals/hospital.component';
import { ForgotPasswordComponent } from './callbacks/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './callbacks/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    DoctorComponent,
    PatientComponent,
    HospitalComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
