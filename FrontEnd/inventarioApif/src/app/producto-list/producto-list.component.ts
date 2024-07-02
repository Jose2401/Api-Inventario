import { Producto } from './../model/producto.interface';
import { DatePipe } from '@angular/common';
import { ProductoService } from './../services/producto.service';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export default class ProductoListComponent implements OnInit{
  private ProductoService = inject(ProductoService);

  productos:Producto[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.ProductoService.list()
    .subscribe(productos => {
      this.productos = productos;
    });
  }

  deleteProductos(producto: Producto){
    this.ProductoService.delete(producto.idProducto)
    .subscribe(()=> {
      this.loadAll();
    })
  }

  buscarPorId(id: string): void {
    if (id.trim() !== '') {
      this.ProductoService.get(Number(id)).subscribe((producto) => {
        this.productos = producto ? [producto] : [];
      });
    } else {
      this.loadAll();
    }
  }

  buscarPorCategoria(id: string): void {
    if (id.trim() !== '') {
      this.ProductoService.findByCategoria(Number(id)).subscribe((producto) => {
        this.productos = producto ? [producto]:[];
      });
    } else {
      this.loadAll();
    }
  }

}
