import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginMessg: Boolean = false;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: true
    })
  }

  ngOnInit() {
  }
  onSubmit(form) {
    if (form.valid) {
      if (form.value.email==='admin@gmail.com' && form.value.password == '123456') {
        this._toastr.success('Welcome to Deshboard.','Successful!')
        localStorage.setItem('isLogin', 'true');
        this._router.navigate(['/user']);
      } else {
        this.loginMessg = true;
        return false;
      }
    } else {
      this.loginMessg = true;
    }
  }

}
