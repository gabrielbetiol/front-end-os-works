import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = "http://localhost:4200/api/clientes"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}`);
  }
}
