import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {  

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }


  login(): void{
    this.auth.loginWithRedirect(); 
    console.log("fsdbfs");
  }

}
