import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component'),
  },
  {
    path: '**',
    redirectTo: () => {
      // const authService = inject(AuthService) // TODO: Se podría gestionar aqui las redireccionamiento de rutas según el estado de autenticación del usuario
      // return authService.isLoggedIn() ? 'dashboard' : 'about'
      return 'about';
    },
    pathMatch: 'full',
  },
];
