import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdemServico } from 'src/app/models/ordem-servico/ordem-servico';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
  private baseUrl = "http://localhost:4200/api/ordens-servico";

  constructor(private http: HttpClient) { }

  getOrdensServico(): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${this.baseUrl}`);
  }
}
