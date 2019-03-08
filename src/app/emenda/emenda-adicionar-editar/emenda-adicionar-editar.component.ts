import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { EmendaService } from '../emenda.service';
import { LegislacaoService } from './../../legislacao/legislacao.service';
import { AutorService } from './../../autor/autor.service';

import { RadioOption } from './../../shared/radio/radio-option.model';
import Swal from 'sweetalert2';
import { Emenda } from '../emenda.model';

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
  editProjeto: boolean = false;
  params: any;

  emendaForm: Emenda = {
    cod_emenda: null,
    num_emenda: null,
    ano: null,
    uf: null,
    cod_ibge: null,
    valor_emenda: null,
    cod_autor: null,
    cod_fonte: null,
    cod_gnd: null,
    localizador: null,
    cod_modalidade: null,
    projeto: null,
    cod_projeto: [],
    cod_programa_governo: null,
    cod_acao_orcamentaria: null,
    cnpj_beneficiario: null,
    beneficiario: null,
    cod_status: null,
    cod_instrumento: null,
    objeto: null,
    proposta_siconv: null,
    convenio_siconv: null,
    lim_empenho: null,
    empenhado: null,
    nota_empenho: null,
    valor_repasse: null,
    valor_contrapartida: null,
    dt_ini_conv: null,
    dt_fim_conv: null,
    impedimento: null,
    obs: null,
    pendencia: null
  }

  currencyOptions = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    precision: 2,
    allowNegative: false,
    align: 'left'
  };

  impedimentoOptions: RadioOption[] = [{label: 'Sim', value:'1'}, {label: 'Não', value:'0'}]

  constructor(private emendaService: EmendaService,
              private legislacaoService: LegislacaoService,
              private autorService: AutorService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.params = res);
    
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

    if(this.params.id){
      this.emendaService.getEmendasById(this.params.id)
        .subscribe(dadosEmenda => {
          this.emendaForm = dadosEmenda;
          
          this.getLegislacaoById(this.emendaForm.ano);
          if(this.emendaForm.uf){
            this.getMunicipiosByUf(this.emendaForm.uf);
          }
          if(this.emendaForm.cod_autor){
            this.getAutorById(this.emendaForm.cod_autor);
          }
          if(this.emendaForm.dt_fim_conv){
            this.emendaForm.dt_fim_conv = this.emendaForm.dt_fim_conv.slice(0, 10);
          }
          if(this.emendaForm.dt_ini_conv){
            this.emendaForm.dt_ini_conv = this.emendaForm.dt_ini_conv.slice(0, 10);
          }
          if(this.emendaForm.impedimento === 'Sim'){
            this.emendaForm.impedimento = "1";
          }
          if(this.emendaForm.impedimento === 'Não'){
            this.emendaForm.impedimento = "0";
          }
          
        })
    }

  }

  getLegislacoes() {
    this.legislacaoService.getLegislacoes()
      .subscribe(legislacoes => this.legislacoes = legislacoes)
  }

  getLegislacaoById(ano: number) {
    this.legislacaoService.getLegislacaoById(ano)
      .subscribe(legislacao => {
        this.legislacao = legislacao;
        if(this.legislacao.dt_indicacao_beneficiario)
          this.legislacao.dt_indicacao_beneficiario = this.legislacao.dt_indicacao_beneficiario.slice(0, 10);
        if(this.legislacao.dt_cadastramento_proposta)
          this.legislacao.dt_cadastramento_proposta = this.legislacao.dt_cadastramento_proposta.slice(0, 10);        
        if(this.legislacao.dt_analise_proposta)
          this.legislacao.dt_analise_proposta = this.legislacao.dt_analise_proposta.slice(0, 10);
        if(this.legislacao.dt_celebracao_convenio)
          this.legislacao.dt_celebracao_convenio = this.legislacao.dt_celebracao_convenio.slice(0, 10);
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
    this.autorService.getAutores()
      .subscribe(autores => this.autores = autores)
  }

  getAutorById(cod_autor: number) {
    this.autorService.getAutoresById(cod_autor)
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

  editarProjeto(){
    this.editProjeto = !this.editProjeto;
  }

  salvarEmenda(emenda: Emenda){
    emenda.projeto = this.emendaForm.cod_projeto;

    if(this.params.id){
      this.emendaService.putEmenda(emenda, this.params.id)
        .subscribe(res => {
          Swal.fire('Atualizado', 'Emenda atualizada com sucesso.', 'success')
          this.router.navigate(['emendas']);
        },
        erro => Swal.fire('Erro', `${erro.error}`, 'error'))
    
      } else {
      this.emendaService.postEmenda(emenda)
        .subscribe(res => {
          Swal.fire('Cadastrado', 'Emenda cadastrada com sucesso.', 'success')
          this.router.navigate(['emendas']);
        },
        erro => Swal.fire('Erro', `${erro.error}`, 'error'))
    }
  }
}
