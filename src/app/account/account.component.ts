import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  parent = {
    lastName: 'Dupont',
    firstName: 'Jean',
    email: 'jean.dupont@example.com',
    phoneNumber: '+33123456789'
  };
  children = [
    { id: 1, firstName: 'Marie', lastName: 'Dupont' },
    { id: 2, firstName: 'Pierre', lastName: 'Dupont' }
  ];
}