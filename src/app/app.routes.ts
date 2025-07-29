import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'LoginPage' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'RegisterPage' }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: 'forgot-password',
  loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
},
{
  path: 'reset-password',
  loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
}
];
