import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  message: string;

  constructor(private landingService: PerfilesService) { }


  ngOnInit(): void {
    this.landingService.sharedMessage.subscribe(message => this.message = message);
    console.log(this.message);
  }

}
