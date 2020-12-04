import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';
import { AuthService } from '@auth0/auth0-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { PersonaBasic } from 'src/app/models/personaBasic.model';
@Component({
  selector: 'app-editar-perfil-comprador',
  templateUrl: './editar-perfil-comprador.component.html',
  styleUrls: ['./editar-perfil-comprador.component.scss']
})

export class EditarPerfilCompradorComponent implements OnInit {

  customerProfile: ProfileModel;
  profileJson: string = null;
  persona: PersonaBasic = {nombre:"hola", domicilio:"hola",ciudad:"hola",telefono:0}

  constructor(private perfilesService: PerfilesService, public auth: AuthService) { }
  
  ngOnInit(): void {
    this.perfilesService.sharedMessageCustomerProfile.subscribe(newProfile => this.customerProfile = newProfile);
    this.auth.user$.subscribe(
      (profile)=>(this.profileJson = JSON.stringify(profile, null, 2)));
  }

  updateCustomerProfile() {
    console.log(this.editarinfo.value);
    
    this.perfilesService.updateBasicInfo("5fc9bdf442fc7300111db5d5",this.persona)
  }

  

  editarinfo = new FormGroup({
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    ciudad: new FormControl(''),

  });


}
