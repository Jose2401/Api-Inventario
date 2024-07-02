import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Categoria } from '../model/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private http=inject(HttpClient);

  list(){
    return this.http.get<Categoria[]>('http://localhost:8080/api/categorias');
  }

  get(id:number){
    return this.http.get<Categoria>('http://localhost:8080/api/categorias/'+id);
  }

  create(categoria: Categoria){
    return this.http.post<Categoria>('http://localhost:8080/api/categorias', categoria);
  }

  update(id:number,categoria: Categoria){
    return this.http.put<Categoria>('http://localhost:8080/api/categorias/'+id, categoria);
  }

  delete(id: number){
    return this.http.delete<void>('http://localhost:8080/api/categorias/'+id);
  }
}
