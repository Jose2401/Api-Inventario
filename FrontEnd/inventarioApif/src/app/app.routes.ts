import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./categoria-list/categoria-list.component')
  },
  {
    path: 'new',
    loadComponent: () => import('./categoria-form/categoria-form.component')
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./categoria-form/categoria-form.component')
  },
  {
    path: 'Producto',
    children: [
      {
        path: '',
        loadComponent: () => import('./producto-list/producto-list.component')
      },
      {
        path: 'newProducto',
        loadComponent: () => import('./producto-form/producto-form.component')
      },
      {
        path: ':id/editProducto',
        loadComponent: () => import('./producto-form/producto-form.component')
      }
    ]
  },
];