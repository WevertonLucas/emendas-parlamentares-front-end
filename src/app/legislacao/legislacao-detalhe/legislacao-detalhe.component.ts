import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Legislacao } from './../legislacao.model';
import { LegislacaoService } from './../legislacao.service';

@Component({
  selector: 'app-legislacao-detalhe',
  templateUrl: './legislacao-detalhe.component.html',
  styleUrls: ['./legislacao-detalhe.component.css']
})
export class LegislacaoDetalheComponent implements OnInit {

  legislacao: Legislacao;

  constructor(private legislacaoService: LegislacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.legislacaoService.getLegislacaoById(this.route.snapshot.params['id'])
      .subscribe(legislacao => this.legislacao = legislacao);
  }

}
