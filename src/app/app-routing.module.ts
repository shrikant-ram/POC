import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  LoginComponent } from './login/login.component'
import {  AuthGuardGuard } from './auth-guard.guard';
import { ErrorPageComponent } from "./auth/error-page/error-page.component";
// import {  UserModule } from "./user/user.module";
const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'login', component:LoginComponent },
  { path:'user', loadChildren:'./user/user.module#UserModule', canActivate:[AuthGuardGuard] },
  { path:'**', component:ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
