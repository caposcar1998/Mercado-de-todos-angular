import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss']
})
export class RegisterButtonComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  register(): void{
    this.auth.loginWithRedirect({screen_hint:'signup'})
  }

}
