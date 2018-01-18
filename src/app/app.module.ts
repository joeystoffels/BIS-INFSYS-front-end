import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { KlantOverzichtComponent } from './components/klant-overzicht/klant-overzicht.component';
import { KlantService } from './services/klant.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    KlantOverzichtComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [
    KlantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
