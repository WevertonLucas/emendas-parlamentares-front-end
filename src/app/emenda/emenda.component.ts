import { EmendaService } from './emenda.service';
import { Component, OnInit } from '@angular/core';

import { Emenda } from './emenda.model';

@Component({
  selector: 'app-emenda',
  templateUrl: './emenda.component.html',
  styleUrls: ['./emenda.component.css']
})
export class EmendaComponent implements OnInit {

  emendas: Emenda[]

  constructor(private emendaService: EmendaService) { }

  ngOnInit() {
    this.emendaService.getEmendas()
      .subscribe(emendas => this.emendas = emendas)
  }

}
