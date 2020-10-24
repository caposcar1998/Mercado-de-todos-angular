import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupUsers } from "../../../../models/signupUsers"

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //@Input() signupUsers : SignupUsers;
  constructor() { }

  onSignup() {
    console.log(this.signupForm.value);
    console.log("Registrado");
  }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phone: new FormControl(''),
    state: new FormControl(''),
    address: new FormControl(''),
  });

}
