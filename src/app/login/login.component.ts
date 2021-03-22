import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new Login('', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Email address: ' + this.model.email + ', Password: '
      + this.model.password)
  }

}
