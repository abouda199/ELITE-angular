import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegisterComponent {
  form: any = {
    nom: '',
    email: '',
    password: '',
    telephone: '',
    adresse: ''
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const { nom, email, password, telephone, adresse } = this.form;

    this.authService.register({
      nom,
      email,
      password,
      telephone,
      adresse
    }).subscribe({
      next: () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.form = {};
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur serveur';
        this.isSignUpFailed = true;
      }
    });
  }
}
