import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enfant } from '../models/enfant.model';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  private apiUrl = 'http://localhost:8080/api/enfants'; // URL de ton backend Spring Boot

  constructor(private http: HttpClient) {}

  // Obtenir tous les enfants du parent connecté
  getEnfantsByParent(): Observable<Enfant[]> {
    return this.http.get<Enfant[]>(`${this.apiUrl}/parent`);
  }

  // Ajouter un nouvel enfant
  addEnfant(enfant: Enfant): Observable<Enfant> {
    return this.http.post<Enfant>(this.apiUrl, enfant);
  }
}
