import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [ SignupComponent, ErrorPageComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
