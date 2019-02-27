import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  postLegislacao(legislacao: Legislacao): Observable<Legislacao> {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.post<Legislacao>(`${EP_API}/legislacoes`, legislacao, httpOptions)
  }

  putLegislacao(legislacao: Legislacao, ano: number): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.put<any>(`${EP_API}/legislacoes/${ano}`, legislacao, httpOptions)
  }

  deleteLegislacao(ano: number): Observable<Legislacao> {
    return this.http.delete<Legislacao>(`${EP_API}/legislacoes/${ano}`)
  }

}
