import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Emenda } from './emenda.model';
import { EP_API } from './../app.api';

@Injectable()
export class EmendaService {

    constructor(private http: HttpClient) { }

    //Faz a requisição para o servidor para obter as emendas.
    getEmendas(search?: string): Observable<Emenda[]> {
        let params: HttpParams = undefined;
        
        if(search){
            params = new HttpParams().append('num_emenda', search);
        }
        return this.http.get<Emenda[]>(`${EP_API}/emendas`, {params: params})
    }

    //Faz a requisição para o servidor para cadastrar uma nova emendas.
    postEmenda(emenda: Emenda): Observable<Emenda> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        
        return this.http.post<Emenda>(`${EP_API}/emendas`, JSON.stringify(emenda), httpOptions)
    }

    //Faz a requisição para o servidor para atualizar uma emendas.
    putEmenda(emenda: Emenda, cod_emenda: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        
        return this.http.put<any>(`${EP_API}/emendas/${cod_emenda}`, JSON.stringify(emenda), httpOptions)
    }

    //Faz a requisição para o servidor para obter uma emendas com base no cod_emenda.
    getEmendasById(cod_emenda: number): Observable<Emenda> {
        return this.http.get<Emenda>(`${EP_API}/emendas/${cod_emenda}`)
    }

    //Faz a requisição para o servidor para obter as ufs.
    getUfs(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/ufs`)
    }

    //Faz a requisição para o servidor para obter os municipios com base na uf.
    getMunicipiosByUf(uf: string): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/municipios/${uf}`)
    }

    //Faz a requisição para o servidor para obter as fontes.
    getFontes(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/fontes`);
    }

    //Faz a requisição para o servidor para obter os gnds.
    getGnds(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/gnd`);
    }

    //Faz a requisição para o servidor para obter as modalidades.
    getModalidades(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/modalidades`);
    }

    //Faz a requisição para o servidor para obter os programas de governo.
    getProgramas(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/programasGoverno`);
    }

    //Faz a requisição para o servidor para obter as ações orçamentárias.
    getAcoes(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/acoesOrcamentaria`);
    }

    //Faz a requisição para o servidor para obter os projetos.
    getProjetos(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/projetos`);
    }

    //Faz a requisição para o servidor para obter os status.
    getStatus(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/status`);
    }

    //Faz a requisição para o servidor para obter os instrumentos.
    getInstrumentos(): Observable<any[]> {
        return this.http.get<any[]>(`${EP_API}/instrumentos`);
    }
    
}