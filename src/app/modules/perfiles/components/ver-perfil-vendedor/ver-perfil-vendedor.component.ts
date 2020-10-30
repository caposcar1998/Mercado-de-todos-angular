import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';
import { VerVendedorProductoModel, VERVENDEDORPRODUCTO2 } from 'src/app/models/verVendedorProducto.model';

@Component({
  selector: 'app-ver-perfil-vendedor',
  templateUrl: './ver-perfil-vendedor.component.html',
  styleUrls: ['./ver-perfil-vendedor.component.scss']
})

export class VerPerfilVendedorComponent implements OnInit {

  viewVendorProfile: ProfileModel;
  vendorProducts: VerVendedorProductoModel[];
  
  constructor(private perfilesService: PerfilesService) { }

  ngOnInit(): void {
    this.perfilesService.sharedMessageViewVendorProfile.subscribe(newProfile => this.viewVendorProfile = newProfile);
    this.perfilesService.sharedMessageVendorProducts.subscribe(newProducts =>this.vendorProducts = newProducts);
  }

  updateViewVendorProfile() {
    this.perfilesService.newViewVendorProfile(PROFILE3);
  }

  updateVendorProducts() {
    this.perfilesService.newVendorProducts(VERVENDEDORPRODUCTO2);
  }

}
