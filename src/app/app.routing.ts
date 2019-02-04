import { EmendaDetalheComponent } from './emenda/emenda-detalhe/emenda-detalhe.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmendaComponent } from './emenda/emenda.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'emendas', component: EmendaComponent },
    { path: 'emendas/:id', component: EmendaDetalheComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);