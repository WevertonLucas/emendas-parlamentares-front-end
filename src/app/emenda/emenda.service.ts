import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Emenda } from './emenda.model';
import { EP_API } from './../app.api';

@Injectable()
export class EmendaService {

    constructor(private http: HttpClient) { }

    getEmendas(search?: string): Observable<Emenda[]> {
        let params: HttpParams = undefined;
        
        if(search){
            params = new HttpParams().append('num_emenda', search);
        }
        return this.http.get<Emenda[]>(`${EP_API}/emendas`, {params: params})
    }

    postEmenda(emenda: Emenda): Observable<Emenda> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        
        return this.http.post<Emenda>(`${EP_API}/emendas`, JSON.stringify(emenda), httpOptions)
    }

    putEmenda(emenda: Emenda, cod_emenda: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        
        return this.http.put<any>(`${EP_API}/emendas/${cod_emenda}`, JSON.stringify(emenda), httpOptions)
    }

    getEmendasById(cod_emenda: number): Observable<Emenda> {
        return this.http.get<Emenda>(`${EP_API}/emendas/${cod_emenda}`)
    }

    getUfs(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/ufs`)
    }

    getMunicipiosByUf(uf: string): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/municipios/${uf}`)
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