import { EmendaService } from './../emenda.service';
import { Component, OnInit } from '@angular/core';
import { Emenda } from '../emenda.model';
import { ActivatedRoute } from '@angular/router';

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
