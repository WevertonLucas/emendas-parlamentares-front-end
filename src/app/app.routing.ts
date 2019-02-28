import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmendaComponent } from './emenda/emenda.component';
import { HomeComponent } from './home/home.component';
import { EmendaDetalheComponent } from './emenda/emenda-detalhe/emenda-detalhe.component';
import { EmendaAdicionarEditarComponent } from './emenda/emenda-adicionar-editar/emenda-adicionar-editar.component';
import { LegislacaoComponent } from './legislacao/legislacao.component';
import { LegislacaoDetalheComponent } from './legislacao/legislacao-detalhe/legislacao-detalhe.component';
import { LegislacaoAdicionarEditarComponent } from './legislacao/legislacao-adicionar-editar/legislacao-adicionar-editar.component';
import { AutorComponent } from './autor/autor.component';
import { AutorAdicionarEditarComponent } from './autor/autor-adicionar-editar/autor-adicionar-editar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'emendas', component: EmendaComponent },
    { path: 'emendas/:id/detalhe', component: EmendaDetalheComponent },
    { path: 'emendas/novo', component: EmendaAdicionarEditarComponent },
    { path: 'emendas/:id', component: EmendaAdicionarEditarComponent },
    { path: 'legislacao', component: LegislacaoComponent },
    { path: 'legislacao/:id/detalhe', component: LegislacaoDetalheComponent },
    { path: 'legislacao/novo', component: LegislacaoAdicionarEditarComponent },
    { path: 'legislacao/:id', component: LegislacaoAdicionarEditarComponent },
    { path: 'autor', component: AutorComponent },
    { path: 'autor/novo', component: AutorAdicionarEditarComponent },
    { path: 'autor/:id', component: AutorAdicionarEditarComponent },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);