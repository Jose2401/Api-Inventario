import { DatePipe } from '@angular/common';
import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Categoria } from '../model/categoria.interface';

@Component({
  selector: 'app-categoria-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './categoria-list.component.html',
  styleUrl: './categoria-list.component.css'
})
export default class CategoriaListComponent implements OnInit{
  private CategoriaService = inject(CategoriaService);

  categorias:Categoria[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.CategoriaService.list()
    .subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  deleteCategoria(categoria: Categoria){
    this.CategoriaService.delete(categoria.idCategoria)
    .subscribe(()=> {
      this.loadAll();
    })
  }

  buscarPorId(id: string): void {
    if (id.trim() !== '') {
      this.CategoriaService.get(Number(id)).subscribe((categoria) => {
        this.categorias = categoria ? [categoria] : [];
      });
    } else {
      this.loadAll();
    }
  }

}
