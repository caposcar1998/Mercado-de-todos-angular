import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {
  trigger,
  state,
  style,
  animate,
  query,
  stagger,
  transition,
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralService } from 'src/app/general.service';
import { interval } from 'rxjs'; 

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('300ms ease-out')),
      transition('default => rotated', animate('300ms ease-in'))
    ]),
    trigger('fadeInGrow', [
      transition('enter => default', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('50ms', [animate('500ms', style({ opacity: 1 }))]),
        ]),
      ]),
    ]),
  ],
})
export class HeaderLoggedComponent implements OnInit {
  profileJson: string = null;
  
  constructor(public auth: AuthService, public general:GeneralService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile)=>(this.profileJson = JSON.stringify(profile, null, 2)));
      this.general.getToken().subscribe(info =>
        localStorage.setItem('token', info.access_token));
        interval(7200000 ).subscribe(x => { 
          
          console.log("hola");
          this.general.getToken().subscribe(info =>
            localStorage.setItem('token', info.access_token));          
        
        });
  }
  
 


  isClosed: boolean = true;

  toggle() {
    this.isClosed = !this.isClosed;
  }
  
  isClickedUser: boolean = true;
  isClickedSeller: boolean = true;
  isClickedCart: boolean = true;
  isFaded: boolean = true;


  rotateSeller() {
      this.isClickedSeller = !this.isClickedSeller;
  }

  rotateCart(){
    this.isClickedCart = !this.isClickedCart;
  }

  rotateUser(){
    this.isClickedUser = !this.isClickedUser;
  }


}
