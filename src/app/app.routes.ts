import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => 
      import('./page/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'store',
    loadComponent: () => 
      import('./page/store/store.page').then(m => m.StorePage)
  }
];