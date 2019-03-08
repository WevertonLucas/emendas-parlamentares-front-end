import { Component, OnInit } from '@angular/core';

import { Autor } from './autor.model';
import { AutorService } from './autor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  todosAutores: Autor[];
  autores: Autor[];

  filtros = {
    autor: '',
    partido: '',
    cargo: ''
  }

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.getAutores();
  }

  getAutores() {
    this.autorService.getAutores()
      .subscribe(autores => {
        this.todosAutores = autores;
        this.autores = autores;
      });
  }

  filtroAutor(filtros): any {
    if(!filtros.autor && !filtros.partido && !filtros.cargo){      
      this.autores = this.todosAutores;
    } else {
      let valida;
      let autor = this.todosAutores.filter(autores => {
        valida = true;
        if(filtros.autor && !autores.autor.toString().toLowerCase().includes(filtros.autor.toLowerCase())){ valida = false; }
        if(filtros.partido && !autores.partido.toString().toLowerCase().includes(filtros.partido.toLowerCase())){ valida = false; }
        if(filtros.cargo && !autores.cargo.toString().toLowerCase().includes(filtros.cargo.toLowerCase())){ valida = false; }

        return valida;
      });

      this.autores = autor;
    }
  }

  apagaAutor(cod_autor: number) {
    Swal.fire({
      title: 'Apagar Autor?',
      text: "Tem certeza que deseja apagar este Autor?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.autorService.deleteAutores(cod_autor)
          .subscribe(res => {
            Swal.fire('Apagado', 'Autor apagada com sucesso.', 'success')
            this.getAutores();
          },
          erro => {
            Swal.fire('Erro', `${erro.error}`, 'error')
          });
      }
    })
  }

}
