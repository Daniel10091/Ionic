import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => 
          import('../pages/home/home.page').then((m) => m.HomePage)
      },
      {
        path: 'locations',
        loadComponent: () => 
          import('../pages/locations/locations.page').then((m) => m.LocationsPage)
      },
      {
        path: 'cashback',
        loadComponent: () => 
          import('../pages/cashback/cashback.page').then((m) => m.CashbackPage)
      },
      {
        path: 'profile',
        loadComponent: () => 
          import('../pages/profile/profile.page').then((m) => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: '/pages/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full',
  },
];
