import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';

@Component({
  selector: 'app-editar-perfil-vendedor',
  templateUrl: './editar-perfil-vendedor.component.html',
  styleUrls: ['./editar-perfil-vendedor.component.scss']
})

export class EditarPerfilVendedorComponent implements OnInit {

  vendorProfile: ProfileModel;
  
  constructor(private perfilesService: PerfilesService) { }

  ngOnInit(): void {
    this.perfilesService.sharedMessageVendorProfile.subscribe(newProfile => this.vendorProfile = newProfile);
  }

  updateVendorProfile() {
    this.perfilesService.newVendorProfile(PROFILE3);
  }

}
