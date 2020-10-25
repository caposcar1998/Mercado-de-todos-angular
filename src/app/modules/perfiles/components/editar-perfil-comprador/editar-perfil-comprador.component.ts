import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-editar-perfil-comprador',
  templateUrl: './editar-perfil-comprador.component.html',
  styleUrls: ['./editar-perfil-comprador.component.scss']
})
export class EditarPerfilCompradorComponent implements OnInit {

  constructor(private perfilesService: PerfilesService) { }
  message : string;

  ngOnInit(): void {
    this.perfilesService.sharedMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.perfilesService.nextMessage("Segundo mensaje")
  }

}
