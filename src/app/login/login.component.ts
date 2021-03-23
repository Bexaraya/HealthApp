import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formErros = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'El email es requerido.'
    },
    'password': {
      'required': 'La contraseña es requerida.'
    }
  };

  loginForm: FormGroup;

  login = new Login('', '');

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  onSubmit() {
    console.log('Email address: ' + 
      this.loginForm.get('email').value + ', Password: ' +
      this.loginForm.get('password').value)
    this.login = this.loginForm.value;
    console.log('Email address: ' + this.login.email + ', Password: ' +
                this.login.password)
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [this.login.email, Validators.required],
      password: [this.login.password, Validators.required]
    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any): void {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;

    for (const field in this.formErros) {
      // clear previous error message (if any)
      this.formErros[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErros[field] +=  messages[key] + ' ';
        }
      }
    }
  }

  ngOnInit() {
  }

}
