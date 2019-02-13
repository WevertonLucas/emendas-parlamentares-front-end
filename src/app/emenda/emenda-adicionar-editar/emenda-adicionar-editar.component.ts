import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmendaService } from '../emenda.service';

import { RadioOption } from './../../shared/radio/radio-option.model';

@Component({
  selector: 'app-emenda-adicionar-editar',
  templateUrl: './emenda-adicionar-editar.component.html',
  styleUrls: ['./emenda-adicionar-editar.component.css']
})
export class EmendaAdicionarEditarComponent implements OnInit {
  
  legislacoes: any[];
  legislacao: any;
  ufs: any[];
  municipios: any[];
  autores: any[];
  autor: any;
  fontes: any[];
  gnds: any[];
  modalidades: any[];
  programas: any[];
  acoes: any[];
  projetos: any[];
  status: any[];
  instrumentos: any[];
  valorGlobal: Number = 0;
  params: any;

  currencyOptions = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    precision: 2,
    allowNegative: false,
    align: 'left'
  };

  impedimentoOptions: RadioOption[] = [{label: 'Sim', value:'1'}, {label: 'Não', value:'0'}]

  constructor(private emendaService: EmendaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.params = res);
    console.log(this.params);
    this.getLegislacoes();
    this.getUfs();
    this.getAutores();
    this.getFontes();
    this.getGnds();
    this.getModalidades();
    this.getProgramas();
    this.getAcoes();
    this.getProjetos();
    this.getStatus();
    this.getInstrumentos();
  }

  getLegislacoes() {
    this.emendaService.getLegislacoes()
      .subscribe(legislacoes => this.legislacoes = legislacoes)
  }

  getLegislacaoById(ano: number) {
    this.emendaService.getLegislacaoById(ano)
      .subscribe(legislacao => {
        this.legislacao = legislacao;
        if(this.legislacao.dt_apresentacao_proposta)
          this.legislacao.dt_apresentacao_proposta = this.legislacao.dt_apresentacao_proposta.slice(0, 10);
        if(this.legislacao.dt_indicacao_beneficiario)
          this.legislacao.dt_indicacao_beneficiario = this.legislacao.dt_indicacao_beneficiario.slice(0, 10);
        if(this.legislacao.dt_indicacao_proposta)
          this.legislacao.dt_indicacao_proposta = this.legislacao.dt_indicacao_proposta.slice(0, 10);
        if(this.legislacao.dt_limite_celebracao)
          this.legislacao.dt_limite_celebracao = this.legislacao.dt_limite_celebracao.slice(0, 10);
      })
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

  getGnds() {
    this.emendaService.getGnds()
      .subscribe(gnd => this.gnds = gnd)
  }

  getModalidades() {
    this.emendaService.getModalidades()
      .subscribe(modalidades => this.modalidades = modalidades)
  }

  getProgramas() {
    this.emendaService.getProgramas()
      .subscribe(programas => this.programas = programas)
  }

  getAcoes() {
    this.emendaService.getAcoes()
      .subscribe(acoes => this.acoes = acoes)
  }

  getProjetos() {
    this.emendaService.getProjetos()
      .subscribe(projetos => this.projetos = projetos)
  }

  getStatus() {
    this.emendaService.getStatus()
      .subscribe(status => this.status = status)
  }

  getInstrumentos() {
    this.emendaService.getInstrumentos()
      .subscribe(instrumentos => this.instrumentos = instrumentos)
  }

  getValorGlobal(valor_repasse: any, valor_contrapartida: any) {
    console.log(valor_repasse, valor_contrapartida);
    if(!valor_repasse) 
      valor_repasse = Number(0);
    if(!valor_contrapartida)
      valor_contrapartida = Number(0);

    this.valorGlobal = Number(valor_repasse) + Number(valor_contrapartida);
  }

  salvarEmenda(emenda: any){
    this.emendaService.postEmenda(emenda)
      .subscribe(response => console.log(response))
  }
}
