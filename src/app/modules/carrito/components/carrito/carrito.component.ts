import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CarritoModel, CARRITO2 } from 'src/app/models/carrito.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cart: CarritoModel[];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.sharedMessageCart.subscribe(newCart => this.cart = newCart);
  }

  updateCarrito() {
    this.carritoService.newCart(CARRITO2);
  }

}
