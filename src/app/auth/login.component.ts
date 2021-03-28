import { Component, OnInit } from '@angular/core';
import { Login } from "./login";
import { SignupStatus } from './signupStatus';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = new Login('', '');
  alertStyle = '';
  signupStatus = new SignupStatus('', '');
  onSubmit() {

  }

  onLogin() {

  }

  constructor() { }

  ngOnInit() {
  }

}
