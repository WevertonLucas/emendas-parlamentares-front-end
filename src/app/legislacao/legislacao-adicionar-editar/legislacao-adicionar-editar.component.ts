import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Legislacao } from './../legislacao.model';
import { LegislacaoService } from './../legislacao.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-legislacao-adicionar-editar',
  templateUrl: './legislacao-adicionar-editar.component.html',
  styleUrls: ['./legislacao-adicionar-editar.component.css']
})
export class LegislacaoAdicionarEditarComponent implements OnInit {

  params: any;

  legislacaoForm: Legislacao = {
    ano: null,
    legislacao: null,
    descricao: null,
    dt_indicacao_beneficiario: null,
    dt_cadastramento_proposta: null,
    dt_analise_proposta: null,
    dt_celebracao_convenio: null
  };

  constructor(private legislacaoService: LegislacaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.params = res);

    if(this.params.id){
      this.legislacaoService.getLegislacaoById(this.params.id)
        .subscribe(dadosLegislacao => {
          this.legislacaoForm = dadosLegislacao;

          if(this.legislacaoForm.dt_indicacao_beneficiario)
            this.legislacaoForm.dt_indicacao_beneficiario = this.legislacaoForm.dt_indicacao_beneficiario.slice(0, 10);
          if(this.legislacaoForm.dt_cadastramento_proposta)
            this.legislacaoForm.dt_cadastramento_proposta = this.legislacaoForm.dt_cadastramento_proposta.slice(0, 10);
          if(this.legislacaoForm.dt_analise_proposta)
            this.legislacaoForm.dt_analise_proposta = this.legislacaoForm.dt_analise_proposta.slice(0, 10);
          if(this.legislacaoForm.dt_celebracao_convenio)
            this.legislacaoForm.dt_celebracao_convenio = this.legislacaoForm.dt_celebracao_convenio.slice(0, 10);

        });
    }
  }

  setDataCelebracao(ano: string) {
    console.log(ano);
    if(ano.length == 4){
      if(!this.legislacaoForm.dt_celebracao_convenio){
        this.legislacaoForm.dt_celebracao_convenio = `${ano}-12-31`;
      }
    }
  }

  salvarLegislacao(legislacao: Legislacao){

    if(this.params.id){
      this.legislacaoService.putLegislacao(legislacao, this.params.id)
        .subscribe(res => {
          Swal.fire('Atualizado', 'Legislação atualizada com sucesso.', 'success'),
          this.router.navigate(['legislacao']);
        },
        erro => Swal.fire('Erro', `${erro.error}`, 'error'));
    } else {
      this.legislacaoService.postLegislacao(legislacao)
        .subscribe(res => {
          Swal.fire('Cadastrado', 'Legislação cadastrada com sucesso.', 'success')
          this.router.navigate(['legislacao']);
        },
        erro => Swal.fire('Erro', `${erro.error}`, 'error'));
    }

  }

}
