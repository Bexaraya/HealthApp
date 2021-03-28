import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./utils/page-not-found.component";


const routes: Routes = [
  { path: 'index', component: HomeComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
