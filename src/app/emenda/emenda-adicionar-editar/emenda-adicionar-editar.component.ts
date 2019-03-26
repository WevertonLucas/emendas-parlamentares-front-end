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
  
  //Variáveis que vão armazenar os dados que serão selecionados no formulário.
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
  
  valorGlobal: Number = 0; //Variável que vai armazenar o valor global.
  editProjeto: boolean = false; //Variável que permite a edição dos projetos no formulário.
  params: any; //Variável que armazena o parâmetro de uma rota.

  //Dados do formulário de Emenda.
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

  //Configuração da mascara de moeda.
  currencyOptions = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    precision: 2,
    allowNegative: false,
    align: 'left'
  };

  //Valores do campo radio.
  impedimentoOptions: RadioOption[] = [{label: 'Sim', value:'1'}, {label: 'Não', value:'0'}]

  constructor(private emendaService: EmendaService,
              private legislacaoService: LegislacaoService,
              private autorService: AutorService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //Varifica se existe parâmetro na rota, se existir armazena na variável params.
    this.route.params.subscribe(res => this.params = res);
    
    //Carrega as informações do servidor ao iniciar a página.
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

    //Se existir parâmetro na rota irá buscar as informações da emenda com base nesse parâmetro. E colocar as informáções no formulário.
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

  //Busca as legislações no servidor.
  getLegislacoes() {
    this.legislacaoService.getLegislacoes()
      .subscribe(legislacoes => this.legislacoes = legislacoes)
  }

  //Busca as informações de uma legislações no servidor utilizando o ano como parâmetro.
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

  //Busca as ufs no servidor.
  getUfs() {
    this.emendaService.getUfs()
      .subscribe(ufs => this.ufs = ufs)
  }

  //Busca os municípios de uma uf no servidor.
  getMunicipiosByUf(uf: string) {
    this.emendaService.getMunicipiosByUf(uf)
      .subscribe(municipios => this.municipios = municipios)
  }

  //Busca os autores no servidor.
  getAutores() {
    this.autorService.getAutores()
      .subscribe(autores => this.autores = autores)
  }

  //Busca as informações de um autor no servidor utilizando o cod_autor como parâmetro.
  getAutorById(cod_autor: number) {
    this.autorService.getAutoresById(cod_autor)
      .subscribe(autor => this.autor = autor)
  }

  //Busca as fontes no servidor.
  getFontes() {
    this.emendaService.getFontes()
      .subscribe(fontes => this.fontes = fontes)
  }

  //Busca os gnds no servidor.
  getGnds() {
    this.emendaService.getGnds()
      .subscribe(gnd => this.gnds = gnd)
  }

  //Busca as modalidades no servidor.
  getModalidades() {
    this.emendaService.getModalidades()
      .subscribe(modalidades => this.modalidades = modalidades)
  }

  //Busca os programas no servidor.
  getProgramas() {
    this.emendaService.getProgramas()
      .subscribe(programas => this.programas = programas)
  }

  //Busca as ações no servidor.
  getAcoes() {
    this.emendaService.getAcoes()
      .subscribe(acoes => this.acoes = acoes)
  }

  //Busca os projetos no servidor.
  getProjetos() {
    this.emendaService.getProjetos()
      .subscribe(projetos => this.projetos = projetos)
  }

  //Busca os status no servidor.
  getStatus() {
    this.emendaService.getStatus()
      .subscribe(status => this.status = status)
  }

  //Busca os instrumentos no servidor.
  getInstrumentos() {
    this.emendaService.getInstrumentos()
      .subscribe(instrumentos => this.instrumentos = instrumentos)
  }

  //Calcula o valor global, que é a soma entre o valor de repasse e o valor de contrapartida.
  getValorGlobal(valor_repasse: any, valor_contrapartida: any) {
    console.log(valor_repasse, valor_contrapartida);
    if(!valor_repasse) 
      valor_repasse = Number(0);
    if(!valor_contrapartida)
      valor_contrapartida = Number(0);

    this.valorGlobal = Number(valor_repasse) + Number(valor_contrapartida);
  }

  //Inverte o valor da variável que permite a edição dos projetos no formulário.
  editarProjeto(){
    this.editProjeto = !this.editProjeto;
  }

  /*
    Método que salva uma emenda a clicar no botão salvar.
    Se existir algum valor na variável params, significa que a emenda já é existente,
    portanto o método que deve ser disparado é um PUT, que irá atualizar esta emenda.
    Se não existir valor na variável params, significa que estamos fazendo um cadastro,
    portanto o método que deve ser disparado é um POST, que irá cadastrar a nova emenda.
  */
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
