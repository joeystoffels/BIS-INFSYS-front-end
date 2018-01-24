import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Opdracht7Component } from './components/opdracht7/opdracht7.component';
import { Opdracht8Component } from './components/opdracht8/opdracht8.component';
import { Opdracht9Component } from './components/opdracht9/opdracht9.component';
// Import Containers
import {
  FullLayoutComponent,
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'opdracht7', component: Opdracht7Component
      },
      {
        path: 'opdracht8', component: Opdracht8Component
      },
      {
        path: 'opdracht9', component: Opdracht9Component
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
