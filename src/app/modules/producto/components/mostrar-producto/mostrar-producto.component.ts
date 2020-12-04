import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from 'src/app/models/producto.model';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent implements OnInit {

  showProducts: Observable<ProductoModel[]>;
  searchTerm: string;

  constructor(
    private route: ActivatedRoute,
    private mostrarProductoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>  {
      this.searchTerm = params.get('search') || "";
      if (this.searchTerm == "") {
        this.showProducts = this.mostrarProductoService.getProductos();
      } else {
        this.showProducts = this.mostrarProductoService.getProductoSearch(this.searchTerm);
      }
    });
  }

}
