import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Opdracht7Component } from './components/opdracht7/opdracht7.component';
import { Opdracht8Component } from './components/opdracht8/opdracht8.component';
import { Opdracht9Component } from './components/opdracht9/opdracht9.component';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
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
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


// import {Routes} from '@angular/router';
// import { KlantOverzichtComponent } from './components/klant-overzicht/klant-overzicht.component';
// import { Opdracht7Component } from './components/opdracht7/opdracht7.component';
// import { Opdracht8Component } from './components/opdracht8/opdracht8.component';
// import { Opdracht9Component } from './components/opdracht9/opdracht9.component';

// export const ROUTES: Routes = [
//   // Main redirect
//   {path: '', redirectTo: 'overzicht/klanten', pathMatch: 'full'},
//   {
//     path: 'klant', component: KlantOverzichtComponent,
//     children: [
//       { path: 'login', component: KlantOverzichtComponent },
//     ]
//   },
//   {
//     path: 'opdracht/7', component: Opdracht7Component,
//     children: [
//       { path: 'login', component: KlantOverzichtComponent },
//     ]
//   },
//   {
//     path: 'opdracht/8', component: Opdracht8Component,
//     children: [
//       { path: 'login', component: KlantOverzichtComponent },
//     ]
//   },
//   {
//     path: 'opdracht/9', component: Opdracht9Component,
//     children: [
//       { path: 'login', component: KlantOverzichtComponent },
//     ]
//   },
//   // Handle all other routes
//   {path: '**',  redirectTo: 'klanten'}
// ];
