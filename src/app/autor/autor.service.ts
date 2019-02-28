import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Autor } from './autor.model';
import { EP_API } from './../app.api';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${EP_API}/autores`)
  }

  getAutoresById(cod_autor: number): Observable<Autor> {
    return this.http.get<Autor>(`${EP_API}/autores/${cod_autor}`);
  }

  postAutores(autor: Autor): Observable<Autor> {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.post<Autor>(`${EP_API}/autores`, autor, httpOptions)
  }
  
  putAutores(autor: Autor, cod_autor: number): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.put<any>(`${EP_API}/autores/${cod_autor}`, autor, httpOptions)
  }
  
  deleteAutores(cod_autor: number): Observable<Autor> {
    return this.http.delete<Autor>(`${EP_API}/autores/${cod_autor}`)
  }
  
}
