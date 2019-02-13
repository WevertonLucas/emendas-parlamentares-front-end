import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Emenda } from './emenda.model';
import { EP_API } from './../app.api';

@Injectable()
export class EmendaService {

    constructor(private http: HttpClient) { }

    getEmendas(): Observable<Emenda[]> {
        return this.http.get<Emenda[]>(`${EP_API}/emendas`)
    }

    postEmenda(emenda: Emenda): Observable<Emenda> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        
        return this.http.post<Emenda>(`${EP_API}/emendas`, JSON.stringify(emenda), httpOptions)
      }

    getEmendasById(cod_emenda: number): Observable<Emenda> {
        return this.http.get<Emenda>(`${EP_API}/emendas/${cod_emenda}`)
    }

    getLegislacoes(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/legislacoes`)
    }

    getLegislacaoById(ano: number): Observable<Emenda> {
        return this.http.get<Emenda>(`${EP_API}/legislacoes/${ano}`)
    }

    getUfs(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/ufs`)
    }

    getMunicipiosByUf(uf: string): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/municipios/${uf}`)
    }

    getAutores(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/autores`)
    }

    getAutoresById(cod_autor: number): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/autores/${cod_autor}`);
    }

    getFontes(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/fontes`);
    }

    getGnds(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/gnd`);
    }

    getModalidades(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/modalidades`);
    }

    getProgramas(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/programasGoverno`);
    }

    getAcoes(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/acoesOrcamentaria`);
    }

    getProjetos(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/projetos`);
    }

    getStatus(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/status`);
    }

    getInstrumentos(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/instrumentos`);
    }
    
}