import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';


@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.scss']
})
export class CompradorComponent implements OnInit {

  message:string;

  constructor(private landingService: LandingService) { }


  ngOnInit(): void{
    this.landingService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage(){
    this.landingService.nextMessage("Second Message");
  }
}
