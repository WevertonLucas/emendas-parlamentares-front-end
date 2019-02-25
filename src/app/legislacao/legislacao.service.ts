import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Legislacao } from './legislacao.model';
import { EP_API } from './../app.api';

@Injectable({
  providedIn: 'root'
})
export class LegislacaoService {

  constructor(private http: HttpClient) { }

  getLegislacoes(): Observable<Legislacao[]> {
    return this.http.get<Legislacao[]>(`${EP_API}/legislacoes`)
  }

  getLegislacaoById(ano: number): Observable<Legislacao> {
    return this.http.get<Legislacao>(`${EP_API}/legislacoes/${ano}`)
  }
}
