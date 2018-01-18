import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { KlantOverzichtComponent } from './components/klant-overzicht/klant-overzicht.component';


@NgModule({
  declarations: [
    AppComponent,
    KlantOverzichtComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
