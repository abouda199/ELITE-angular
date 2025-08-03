import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  lastName: string = 'Dupont';
  firstName: string = 'Jean';
  email: string = 'jean.dupont@example.com';
  phoneNumber: string = '+33123456789';
  children: any[] = [
    { id: 1, firstName: 'Marie', lastName: 'Dupont' },
    { id: 2, firstName: 'Pierre', lastName: 'Dupont' }
  ];

  constructor(private router: Router) {}

  openRegistration() {
    this.router.navigate(['/register']);
  }
}