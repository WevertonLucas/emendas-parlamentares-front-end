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

  emenda: Emenda

  constructor(private emendaService: EmendaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.emendaService.getEmendasById(this.route.snapshot.params['id'])
      .subscribe(emenda => this.emenda = emenda)
  }

}
