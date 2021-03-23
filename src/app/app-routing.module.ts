import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './callbacks/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './callbacks/page-not-found/page-not-found.component';
import { DoctorComponent } from './doctors/doctor.component';
import { HospitalComponent } from './hospitals/hospital.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patients/patient.component';
import { UserRegistrationComponent } from './registration/user-registration.component';


const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent, data: {title: 'Registro usuario nuevo'}},
  { path: 'forgotpassword', component: ForgotPasswordComponent, data: {title: 'Password olvidao'}},
  { path: 'login', component: LoginComponent, data: {title: 'Login usuario'}},
  
  { path: 'doctor/:id', component: DoctorComponent},
  { path: 'patient/:id', component: PatientComponent},
  { path: 'hospital/:id', component: HospitalComponent},
  
  { path: 'index', component: AppComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
