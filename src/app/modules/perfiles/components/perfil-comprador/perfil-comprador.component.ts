import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-perfil-comprador',
  templateUrl: './perfil-comprador.component.html',
  styleUrls: ['./perfil-comprador.component.scss']
})
export class PerfilCompradorComponent implements OnInit {

  constructor(private perfilesService: PerfilesService) { }
  message : string;

  ngOnInit(): void {
    console.log(this.perfilesService.accesoFacturacion);
    this.perfilesService.sharedMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

}
