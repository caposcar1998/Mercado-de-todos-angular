import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    console.log("hola")
  }

  loginForm = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
  });

}




