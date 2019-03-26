import { Component, OnInit } from '@angular/core';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Emenda } from './emenda.model';
import { EmendaService } from './emenda.service';

@Component({
  selector: 'app-emenda',
  templateUrl: './emenda.component.html',
  styleUrls: ['./emenda.component.css']
})
export class EmendaComponent implements OnInit {

  todasEmendas: Emenda[];
  emendas: Emenda[];

  //Objeto com os atributos utilizados nos filtros.
  filtros = {
    ano: '',
    num_emenda: '',
    autor: '',
    partido: '',
    cargo: '',
    beneficiario: '',
    status: ''
  }

  constructor(private emendaService: EmendaService) { }

  ngOnInit() {
    //Carrega as emendas do servidor.
    this.emendaService.getEmendas()
      .subscribe(emendas => {
        this.todasEmendas = emendas;
        this.emendas = emendas;
      })
  }

  //Método do filtro de emendas.
  filtroEmenda(filtros): any {
    if(!filtros.ano && !filtros.num_emenda && !filtros.autor && !filtros.partido && !filtros.cargo && !filtros.beneficiario && !filtros.status){      
      this.emendas = this.todasEmendas;
    } else {
      let valida;
      let emenda = this.todasEmendas.filter(emendas => {
        valida = true;
        if(filtros.ano && !emendas.ano.toString().includes(filtros.ano.toLowerCase())){ valida = false; }
        if(filtros.num_emenda && !emendas.num_emenda.toString().includes(filtros.num_emenda.toLowerCase())){ valida = false; }
        if(filtros.autor && !emendas.autor.toString().toLowerCase().includes(filtros.autor.toLowerCase())){ valida = false; }
        if(filtros.partido && !emendas.partido.toString().toLowerCase().includes(filtros.partido.toLowerCase())){ valida = false; }
        if(filtros.cargo && !emendas.cargo.toString().toLowerCase().includes(filtros.cargo.toLowerCase())){ valida = false; }
        if((filtros.beneficiario && emendas.beneficiario == null) || filtros.beneficiario && !emendas.beneficiario.toString().toLowerCase().includes(filtros.beneficiario.toLowerCase())){ valida = false; }
        if((filtros.status && emendas.status == null) || filtros.status && !emendas.status.toString().toLowerCase().includes(filtros.status.toLowerCase())){ valida = false; }

        return valida;
      });

      this.emendas = emenda;
    }
  }

}
