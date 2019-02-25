import { Component, OnInit } from '@angular/core';

import { Legislacao } from './legislacao.model';
import { LegislacaoService } from './legislacao.service';

@Component({
  selector: 'app-legislacao',
  templateUrl: './legislacao.component.html',
  styleUrls: ['./legislacao.component.css']
})
export class LegislacaoComponent implements OnInit {

  legislacoes: Legislacao[];

  constructor(private legislacaoService: LegislacaoService) { }

  ngOnInit() {
    this.legislacaoService.getLegislacoes()
      .subscribe(legislacoes => this.legislacoes = legislacoes);
  }

}
