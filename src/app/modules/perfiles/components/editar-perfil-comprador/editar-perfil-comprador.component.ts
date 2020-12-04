import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel } from 'src/app/models/profile.model';
import { AuthService } from '@auth0/auth0-angular';
import { FormGroup, FormControl,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';


@Component({
  selector: 'app-editar-perfil-comprador',
  templateUrl: './editar-perfil-comprador.component.html',
  styleUrls: ['./editar-perfil-comprador.component.scss']
})

export class EditarPerfilCompradorComponent implements OnInit {

  profileJson: string = null;
  persona: Persona = {nombre : "", ciudad : "", telefono : 0, domicilio : ""} ;
  idCambio: string = null;

  constructor(private perfilesService: PerfilesService, public auth: AuthService) { }
  
  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile)=>(this.profileJson = JSON.stringify(profile, null, 2)));
  }

  updateCustomerProfile() {
    
    let profileInfo= JSON.parse(this.profileJson).email
    this.perfilesService.getCorreoConCorreoId(profileInfo)
    this.idCambio = profileInfo
    this.persona.nombre = this.updatePerfilForm.value.nombre
    this.persona.ciudad = this.updatePerfilForm.value.ciudad
    this.persona.domicilio = this.updatePerfilForm.value.domicilio
    this.perfilesService.updatePersona(this.persona,this.idCambio);
  }



  updatePerfilForm = new FormGroup({
    nombre: new FormControl(''),
    ciudad: new FormControl(''),
    telefono: new FormControl(''),
    domicilio: new FormControl(''),
  });



}
