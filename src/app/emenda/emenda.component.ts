import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Emenda } from './emenda.model';
import { EmendaService } from './emenda.service';

@Component({
  selector: 'app-emenda',
  templateUrl: './emenda.component.html',
  styleUrls: ['./emenda.component.css']
})
export class EmendaComponent implements OnInit {

  emendas: Emenda[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private emendaService: EmendaService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(searchTerm => 
        this.emendaService.getEmendas(searchTerm)
      .subscribe(emendas => this.emendas = emendas));

    this.emendaService.getEmendas()
      .subscribe(emendas => this.emendas = emendas)
  }

}
