import {Routes} from '@angular/router';

import {Dashboard1Component} from './views/dashboards/dashboard1.component';
import {Dashboard2Component} from './views/dashboards/dashboard2.component';
import {Dashboard3Component} from './views/dashboards/dashboard3.component';
import {Dashboard4Component} from './views/dashboards/dashboard4.component';
import {Dashboard5Component} from './views/dashboards/dashboard5.component';

import {StarterViewComponent} from './views/appviews/starterview.component';
import {LoginComponent} from './views/appviews/login.component';

import {BlankLayoutComponent} from './components/common/layouts/blankLayout.component';
import {BasicLayoutComponent} from './components/common/layouts/basicLayout.component';
import {KlantenComponent} from './components/gameparadise/klanten/klanten.component';
import {ConsoleInReparatieComponent} from "./components/gameparadise/rapportage/console-in-reparatie/console-in-reparatie.component";
import {NietVerhuurdIn2016Component} from "./components/gameparadise/rapportage/niet-verhuurd-in2016/niet-verhuurd-in2016.component";
import {OmzettenComponent} from "./components/gameparadise/rapportage/omzetten/omzetten.component";
import {OmzettenPerKlantComponent} from "./components/gameparadise/rapportage/omzetten-per-klant/omzetten-per-klant.component";
import {OverzichtVerhuurdComponent} from "./components/gameparadise/rapportage/overzicht-verhuurd/overzicht-verhuurd.component";
import {InkoophoeveelheidComponent} from "./components/gameparadise/rapportage/inkoophoeveelheid/inkoophoeveelheid.component";
import {AuthGuard} from "./guard/auth.guard";

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'starterview', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component}
    ]
  },
  {
    path: 'rapportage', component: BasicLayoutComponent,
    children: [
      {path: 'console-in-reparatie', component: ConsoleInReparatieComponent, canActivate: [AuthGuard]},
      {path: 'niet-verhuurd-in2016', component: NietVerhuurdIn2016Component, canActivate: [AuthGuard]},
      {path: 'omzetten', component: OmzettenComponent, canActivate: [AuthGuard]},
      {path: 'omzetten-per-klant', component: OmzettenPerKlantComponent, canActivate: [AuthGuard]},
      {path: 'overzicht-verhuurd', component: OverzichtVerhuurdComponent, canActivate: [AuthGuard]},
      {path: 'inkoophoeveelheid', component: InkoophoeveelheidComponent, canActivate: [AuthGuard]},
    ]
  },
  {
    path: 'overzicht', component: BasicLayoutComponent,
    children: [
      {path: 'klanten', component: KlantenComponent, canActivate: [AuthGuard]},
    ],
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: '', component: StarterViewComponent, canActivate: [AuthGuard]}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  // Handle all other routes
  {path: '**',  redirectTo: 'login'}
];
