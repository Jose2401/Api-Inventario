import { Categoria } from './../model/categoria.interface';
import { CategoriaService } from './../services/categoria.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export default class CategoriaFormComponent implements OnInit{

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private categoriaService =inject(CategoriaService);

  form?: FormGroup;
  categoria?: Categoria;


  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');

    if(id){
      this.categoriaService.get(parseInt(id))
      .subscribe(categoria => {
        this.categoria =categoria;
        this.form = this.fb.group({
          nombreCategoria:[categoria.nombreCategoria,Validators.required],
          descripcionCategoria: [categoria.descripcionCategoria, Validators.required]
        });
      })
    }
    else{
      this.form = this.fb.group({
        nombreCategoria:['', Validators.required],
        descripcionCategoria: ['', Validators.required]
    });
    }
  }

  save(){
    const categoriaForm=this.form!.value;

    if(this.categoria){
      this.categoriaService.update(this.categoria.idCategoria,categoriaForm)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    } else{
      this.categoriaService.create(categoriaForm)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    }

  }
}
