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

  autores: Autor[];

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.getAutores();
  }

  getAutores() {
    this.autorService.getAutores()
      .subscribe(autores => this.autores = autores);
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
