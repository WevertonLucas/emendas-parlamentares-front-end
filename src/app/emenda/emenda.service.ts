import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Emenda } from './emenda.model';
import { EP_API } from './../app.api';

@Injectable()
export class EmendaService {

    constructor(private http: HttpClient) { }

    getEmendas(): Observable<Emenda[]> {
        return this.http.get<Emenda[]>(`${EP_API}/emendas`)
    }

    getEmendasById(id: number): Observable<Emenda> {
        return this.http.get<Emenda>(`${EP_API}/emendas/${id}`)
    }

    getLegislacoes(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/legislacoes`)
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
    
}