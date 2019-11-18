import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMsg: string;
  spin: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.spin = true;
    setTimeout(()=> {
      this.spin = false;
      }, 3000);

   }

  login() {
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
      .catch(error => this.errorMsg = error.message);
  }


}
