import { Component, OnInit } from '@angular/core';

import { Legislacao } from './legislacao.model';
import { LegislacaoService } from './legislacao.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-legislacao',
  templateUrl: './legislacao.component.html',
  styleUrls: ['./legislacao.component.css']
})
export class LegislacaoComponent implements OnInit {

  legislacoes: Legislacao[];

  constructor(private legislacaoService: LegislacaoService) { }

  ngOnInit() {
    this.getLegislacoes();
  }

  getLegislacoes() {
    this.legislacaoService.getLegislacoes()
      .subscribe(legislacoes => this.legislacoes = legislacoes);
  }

  apagaLegislacao(ano: number) {
    Swal.fire({
      title: 'Apagar Legislação?',
      text: "Tem certeza que deseja apagar está legislação?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.legislacaoService.deleteLegislacao(ano)
          .subscribe(res => {
            Swal.fire('Apagado', 'Legislação apagada com sucesso.', 'success')
            this.getLegislacoes();
          },
          erro => {
            Swal.fire('Erro', `${erro.error}`, 'error')
          });
      }
    })
  }

}
