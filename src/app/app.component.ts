// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/login">Login</a> |
      <a routerLink="/register">Register</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
