import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { KlantOverzichtComponent } from './components/klant-overzicht/klant-overzicht.component';
import { KlantService } from './services/klant.service';
import { Opdracht7Service } from './services/opdracht7.service';
import { HttpClientModule } from '@angular/common/http';
import { Opdracht7Component } from './components/opdracht7/opdracht7.component';
import { Opdracht8Component } from './components/opdracht8/opdracht8.component';
import { Opdracht9Component } from './components/opdracht9/opdracht9.component';
import { Opdracht8Service } from './services/opdracht8.service';
import { Opdracht9Service } from './services/opdracht9.service';


@NgModule({
  declarations: [
    AppComponent,
    KlantOverzichtComponent,
    Opdracht7Component,
    Opdracht8Component,
    Opdracht9Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [
    KlantService,
    Opdracht7Service,
    Opdracht8Service,
    Opdracht9Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
