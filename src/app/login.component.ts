import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: '',
    password: ''
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  successMessage = ''; // ✅ Ajouté
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        this.successMessage = 'Connexion réussie ! ✅'; 

        setTimeout(() => {
          this.router.navigate(['/']); 
        }, 2000);
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Erreur lors de la connexion ❌';
        this.successMessage = '';
        this.isLoginFailed = true;
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
  goToForgotPassword(): void {
  this.router.navigate(['/forgot-password']);
}
}
