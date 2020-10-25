import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  message: string;

  constructor(private landingService: LandingService) { }


  ngOnInit(): void {
    console.log(this.landingService.accesoFacturacion);
    this.landingService.sharedMessage.subscribe(message => this.message = message);
    console.log(this.message);
  }

}
