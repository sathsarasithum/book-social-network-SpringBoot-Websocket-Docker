import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { Register } from './pages/register/register';
import { ActivateAccount } from './pages/activate-account/activate-account';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'activate-account',
    component: ActivateAccount
  },
  {
    path: 'books',
    loadChildren: () => import('./module/book/book-module').then(m => m.BookModule)
  }
];