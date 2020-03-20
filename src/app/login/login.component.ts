import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {  Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _router:Router
  ) {
    this.loginForm = this._fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      remember:true
    
    })
   }

  ngOnInit() {
  }
  onSubmit(form){
      if(form.valid){
        this._router.navigate(['/user/']);
      }
  }

}
