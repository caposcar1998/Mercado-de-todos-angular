import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-perfil-comprador',
  templateUrl: './perfil-comprador.component.html',
  styleUrls: ['./perfil-comprador.component.scss']
})
export class PerfilCompradorComponent implements OnInit {
  profileJson: string = null;
  customerProfile: ProfileModel;

  constructor(private perfilesService: PerfilesService, public auth: AuthService) { }
  
  ngOnInit(): void {
    this.perfilesService.sharedMessageCustomerProfile.subscribe(newProfile => this.customerProfile = newProfile);
    this.auth.user$.subscribe(
      (profile)=>(this.profileJson = JSON.stringify(profile, null, 2)));
      
  }

  updateCustomerProfile() {
    this.perfilesService.newCustomerProfile(PROFILE3);
  }

}
