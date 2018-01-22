import {Routes} from '@angular/router';
import { KlantOverzichtComponent } from './components/klant-overzicht/klant-overzicht.component';
import { Opdracht7Component } from './components/opdracht7/opdracht7.component';
import { Opdracht8Component } from './components/opdracht8/opdracht8.component';
import { Opdracht9Component } from './components/opdracht9/opdracht9.component';

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'overzicht/klanten', pathMatch: 'full'},
  {
    path: 'klant', component: KlantOverzichtComponent,
    children: [
      { path: 'login', component: KlantOverzichtComponent },
    ]
  },
  {
    path: 'opdracht/7', component: Opdracht7Component,
    children: [
      { path: 'login', component: KlantOverzichtComponent },
    ]
  },
  {
    path: 'opdracht/8', component: Opdracht8Component,
    children: [
      { path: 'login', component: KlantOverzichtComponent },
    ]
  },
  {
    path: 'opdracht/9', component: Opdracht9Component,
    children: [
      { path: 'login', component: KlantOverzichtComponent },
    ]
  },
  // Handle all other routes
  {path: '**',  redirectTo: 'klanten'}
];