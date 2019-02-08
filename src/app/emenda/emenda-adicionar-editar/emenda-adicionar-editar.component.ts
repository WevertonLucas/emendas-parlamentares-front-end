import { Component, OnInit } from '@angular/core';
import { EmendaService } from '../emenda.service';

@Component({
  selector: 'app-emenda-adicionar-editar',
  templateUrl: './emenda-adicionar-editar.component.html',
  styleUrls: ['./emenda-adicionar-editar.component.css']
})
export class EmendaAdicionarEditarComponent implements OnInit {
  
  legislacoes: any[];
  ufs: any[];
  municipios: any[];
  autores: any[];
  autor: any;
  fontes: any[];
  gnds: any[];
  modalidades: any[];

  constructor(private emendaService: EmendaService) { }

  ngOnInit() {
    this.getLegislacoes();
    this.getUfs();
    this.getAutores();
    this.getFontes();
    this.getGnd();
    this.getModalidade();
  }

  getLegislacoes() {
    this.emendaService.getLegislacoes()
      .subscribe(legislacao => this.legislacoes = legislacao)
  }

  getUfs() {
    this.emendaService.getUfs()
      .subscribe(ufs => this.ufs = ufs)
  }

  getMunicipiosByUf(uf: string) {
    this.emendaService.getMunicipiosByUf(uf)
      .subscribe(municipios => this.municipios = municipios)
  }

  getAutores() {
    this.emendaService.getAutores()
      .subscribe(autores => this.autores = autores)
  }

  getAutorById(cod_autor: number) {
    this.emendaService.getAutoresById(cod_autor)
      .subscribe(autor => this.autor = autor)
  }

  getFontes() {
    this.emendaService.getFontes()
      .subscribe(fontes => this.fontes = fontes)
  }

  getGnd() {
    this.emendaService.getGnds()
      .subscribe(gnd => this.gnds = gnd)
  }

  getModalidade() {
    this.emendaService.getModalidades()
      .subscribe(modalidades => this.modalidades = modalidades)
  }

}
