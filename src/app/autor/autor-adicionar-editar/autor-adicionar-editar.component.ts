import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Autor } from '../autor.model';
import { AutorService } from '../autor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor-adicionar-editar',
  templateUrl: './autor-adicionar-editar.component.html',
  styleUrls: ['./autor-adicionar-editar.component.css']
})
export class AutorAdicionarEditarComponent implements OnInit {

  params: any;

  autorForm: Autor = {
    cod_autor: null,
    autor: null,
    cargo: null,
    partido: null
  }

  constructor(private autorService: AutorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.params = res);

    if(this.params.id){
      this.autorService.getAutoresById(this.params.id)
        .subscribe(dadosAutor => this.autorForm = dadosAutor)
    }
  }

  salvarAutor(autor: Autor) {
    if(this.params.id){
      this.autorService.putAutores(autor, this.params.id)
        .subscribe(res => {
          Swal.fire('Atualizado', 'Autor atualizado com sucesso.', 'success'),
          this.router.navigate(['autor']);
        },
        erro => Swal.fire('Erro', `${erro.error}`, 'error'));
    } else {
      this.autorService.postAutores(autor)
        .subscribe(res => {
          Swal.fire('Cadastrado', 'Autor cadastrada com sucesso.', 'success'),
          this.router.navigate(['autor']);
        },
        erro => Swal.fire('Erro', `${erro.error}`, 'error'));
    }
  }

}
