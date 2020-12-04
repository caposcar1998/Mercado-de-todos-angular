import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

import {map, retry, catchError, tap} from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //intentar cambiar alerta
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getToken() {
    const body = {"client_id":"2NsMmxGLgNbDv8Ui77gM6jAYQg3s2kJD","client_secret":"fJaJcLoqfoQFJWmwC3Of1kXuMAZ8LdNWWRQGfsEtKwDSYFI2FanlQlpnpskUPJtH","audience":"http://localhost:3000/","grant_type":"client_credentials"}
    return this.http.post<any>("https://dev-zglcmhno.us.auth0.com/oauth/token",body).pipe(retry(3),catchError(this.handleError));
  }

  constructor(private http: HttpClient) { }
}
