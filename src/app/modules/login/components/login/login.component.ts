import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginUsers} from "../../../../models/loginUsers";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //parametros para la otra clase que muestra los datos
  @Input() loginUsers : LoginUsers;

  constructor(private loginService: LoginService) {
   }

  ngOnInit(): void {
    console.log(this.loginService.accesoFacturacion);
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




