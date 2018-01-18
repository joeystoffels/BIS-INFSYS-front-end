import {Routes} from '@angular/router';
import { KlantOverzichtComponent } from './components/klant-overzicht/klant-overzicht.component';

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'overzicht/klanten', pathMatch: 'full'},
  {
    path: 'klant', component: KlantOverzichtComponent,
    children: [
      { path: 'login', component: KlantOverzichtComponent },
    ]
  },
  // Handle all other routes
  {path: '**',  redirectTo: 'klanten'}
];