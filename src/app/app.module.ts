import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from './views/dashboards/dashboards.module';
import {AppviewsModule} from './views/appviews/appviews.module';

// App modules/components
import {LayoutsModule} from './components/common/layouts/layouts.module';
import { KlantenComponent } from './components/gameparadise/klanten/klanten.component';
import { KlantenService } from './services/data/klanten.service';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { OverzichtVerhuurdComponent } from './components/gameparadise/rapportage/overzicht-verhuurd/overzicht-verhuurd.component';
import { NietVerhuurdIn2016Component } from './components/gameparadise/rapportage/niet-verhuurd-in2016/niet-verhuurd-in2016.component';
import { OmzettenComponent } from './components/gameparadise/rapportage/omzetten/omzetten.component';
import { Top10Component } from './components/gameparadise/rapportage/top10/top10.component';
import { ConsoleInReparatieComponent } from './components/gameparadise/rapportage/console-in-reparatie/console-in-reparatie.component';
import { OmzettenPerKlantComponent } from './components/gameparadise/rapportage/omzetten-per-klant/omzetten-per-klant.component';
import { InkoophoeveelheidComponent } from './components/gameparadise/rapportage/inkoophoeveelheid/inkoophoeveelheid.component';
import {AuthGuard} from "./guard/auth.guard";
import {AuthService} from "./services/data/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    KlantenComponent,
    OverzichtVerhuurdComponent,
    NietVerhuurdIn2016Component,
    OmzettenComponent,
    Top10Component,
    ConsoleInReparatieComponent,
    OmzettenPerKlantComponent,
    InkoophoeveelheidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    RouterModule.forRoot(ROUTES),
    DxDataGridModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    KlantenService],
    bootstrap: [AppComponent]
})
export class AppModule { }
