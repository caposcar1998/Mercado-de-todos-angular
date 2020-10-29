import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';

@Component({
  selector: 'app-perfil-comprador',
  templateUrl: './perfil-comprador.component.html',
  styleUrls: ['./perfil-comprador.component.scss']
})
export class PerfilCompradorComponent implements OnInit {

  customerProfile: ProfileModel;

  constructor(private perfilesService: PerfilesService) { }
  
  ngOnInit(): void {
    this.perfilesService.sharedMessageCustomerProfile.subscribe(newProfile => this.customerProfile = newProfile);
  }

  updateCustomerProfile() {
    this.perfilesService.newCustomerProfile(PROFILE3);
  }

}
