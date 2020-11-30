import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animaciones';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slider]
})
export class AppComponent {
  title = 'mercado-de-todos-angular';
  loggedIn = true;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(public auth:AuthService){}
}
