import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
//import {  map } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';

import { Emenda } from './emenda.model';
import { EP_API } from './../app.api';

@Injectable()
export class EmendaService {

    constructor(private http: HttpClient) { }

    getEmendas(): Observable<Emenda[]> {
        return this.http.get<Emenda[]>(`${EP_API}/emendas`)
            //.map(response => response.json())
            //.catch()
    }

    getEmendasById(id: number): Observable<Emenda> {
        return this.http.get<Emenda>(`${EP_API}/emendas/${id}`)
    }
    
}