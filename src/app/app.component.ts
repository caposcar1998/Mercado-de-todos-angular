import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animaciones';
import { AuthService } from '@auth0/auth0-angular';
import { interval, Subscription } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

import {map, retry, catchError, tap} from "rxjs/operators";
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slider]
})
export class AppComponent  {
  title = 'mercado-de-todos-angular';
  loggedIn = true;
  subscription: Subscription;
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(public auth:AuthService, public general:GeneralService){




    
    
  }
}
