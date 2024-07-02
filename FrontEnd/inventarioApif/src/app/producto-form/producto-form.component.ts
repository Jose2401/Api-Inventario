import { Producto } from './../model/producto.interface';
import { ProductoService } from './../services/producto.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export default class ProductoFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private productoService =inject(ProductoService);

  form?: FormGroup;
  producto?: Producto;


  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');

    if(id){
      this.productoService.get(parseInt(id))
      .subscribe(producto => {
        this.producto =producto;
        this.form = this.fb.group({
          nombreProducto:[producto.nombreProducto,Validators.required],
          descripcionProducto: [producto.descripcionProducto, Validators.required],
          existenciaProducto: [producto.existenciaProducto, Validators.required],
          precioProducto: [producto.precioProducto, Validators.required],
          idCategoria: [producto.idCategoria, Validators.required],
        });
      })
    }
    else{
      this.form = this.fb.group({
        nombreProducto:['', Validators.required],
        descripcionProducto: ['', Validators.required],
        existenciaProducto: ['', Validators.required],
        precioProducto: ['', Validators.required],
        idCategoria: ['', Validators.required]
    });
    }
  }

  save(){
    const productoForm=this.form!.value;

    if(this.producto){
      this.productoService.update(this.producto.idProducto,productoForm)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    } else{
      this.productoService.create(productoForm)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    }

  }
}
