import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {  Router } from '@angular/router'
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _router:Router,
    private _toastr:ToastrService
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
        this._toastr.success('Login Successful!')
        localStorage.setItem('isLogin','true');
        this._router.navigate(['/user']);
      }
  }

}
