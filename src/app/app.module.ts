import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmendaComponent } from './emenda/emenda.component';
import { EmendaDetalheComponent } from './emenda/emenda-detalhe/emenda-detalhe.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { EmendaService } from './emenda/emenda.service';
import { HeaderComponent } from './header/header.component';
import { EmendaAdicionarEditarComponent } from './emenda/emenda-adicionar-editar/emenda-adicionar-editar.component';
import { RadioComponent } from './shared/radio/radio.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmendaComponent,
    EmendaDetalheComponent,
    HomeComponent,
    HeaderComponent,
    EmendaAdicionarEditarComponent,
    RadioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    routing
  ],
  providers: [EmendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
