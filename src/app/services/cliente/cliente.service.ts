import { Cliente } from './../../models/cliente/cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = "http://localhost:4200/api/clientes";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}`);
  }

  login(email: string): Observable<Cliente>{
      return this.http.get<Cliente>(`${this.baseUrl}/login/${email}`);
  }

  insert(cliente: Cliente) {
    return this.http.post<Cliente>(`${this.baseUrl}`, cliente);
  }
}
