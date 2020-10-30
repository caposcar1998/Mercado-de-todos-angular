import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { ProfileModel, PROFILE3 } from 'src/app/models/profile.model';
import { VerCompradorProductoModel, VERCOMPRADORPRODUCTO2 } from 'src/app/models/verCompradorProducto.model';

@Component({
  selector: 'app-ver-perfil-comprador',
  templateUrl: './ver-perfil-comprador.component.html',
  styleUrls: ['./ver-perfil-comprador.component.scss']
})

export class VerPerfilCompradorComponent implements OnInit {

  viewCustomerProfile: ProfileModel;
  customerSales: VerCompradorProductoModel[];
  
  constructor(private perfilesService: PerfilesService) { }

  ngOnInit(): void {
    this.perfilesService.sharedMessageViewCustomerProfile.subscribe(newProfile => this.viewCustomerProfile = newProfile);
    this.perfilesService.sharedMessageCustomerSales.subscribe(newSales => this.customerSales = newSales);
  }

  updateViewCustomerProfile() {
    this.perfilesService.newViewCustomerProfile(PROFILE3);
  }

  updateCustomerSales() {
    this.perfilesService.newCustomerSales(VERCOMPRADORPRODUCTO2);
  }

}
