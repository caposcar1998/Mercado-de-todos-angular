import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';


@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.component.html',
  styleUrls: ['./comprador.component.scss']
})
export class CompradorComponent implements OnInit {

  message:string;

  constructor(private landingService: PerfilesService) { }


  ngOnInit(): void{
    this.landingService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage(){
    this.landingService.nextMessage("Second Message");
  }
}
