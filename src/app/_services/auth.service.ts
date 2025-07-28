import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/login`, { email, password }, httpOptions);
  }

  register(data: {
  nom: string;
  email: string;
  password: string;
  telephone?: string;
  adresse?: string;
}) {
  return this.http.post('http://localhost:8081/api/auth/register', data);
}
}
