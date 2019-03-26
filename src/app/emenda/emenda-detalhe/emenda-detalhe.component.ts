import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Emenda } from '../emenda.model';
import { EmendaService } from './../emenda.service';

@Component({
  selector: 'app-emenda-detalhe',
  templateUrl: './emenda-detalhe.component.html',
  styleUrls: ['./emenda-detalhe.component.css']
})
export class EmendaDetalheComponent implements OnInit {

  //Variável que armazena as informações da emenda.
  emenda: Emenda

  constructor(private emendaService: EmendaService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Busca as informações de uma emenda, utilizando o parâmetro da rota que é o identificador da emenda.
    this.emendaService.getEmendasById(this.route.snapshot.params['id'])
      .subscribe(emenda => this.emenda = emenda)
  }

}
