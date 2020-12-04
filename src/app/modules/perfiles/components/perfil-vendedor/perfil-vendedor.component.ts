import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';
import { VerVendedorProductoModel, VERVENDEDORPRODUCTO2 } from 'src/app/models/verVendedorProducto.model';

@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.scss']
})
export class PerfilVendedorComponent implements OnInit {

  vendorProfile: ProfileModel;
  vendorProducts: VerVendedorProductoModel[];
  
  constructor(private perfilesService: PerfilesService) { }

  ngOnInit(): void {
    this.perfilesService.sharedMessageVendorProfile.subscribe(newProfile => this.vendorProfile = newProfile);
    this.perfilesService.sharedMessageVendorProducts.subscribe(newProducts =>this.vendorProducts = newProducts);
  }

  updateVendorProfile() {
    this.perfilesService.newVendorProfile(PROFILE3);
  }

  updateVendorProducts() {
    this.perfilesService.newVendorProducts(VERVENDEDORPRODUCTO2);
  }

}
