import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { AuthShellComponent } from './layouts/auth/auth-shell.component';
import { ShellComponent } from './layouts/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: 'auth',
    component: AuthShellComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login.page').then((m) => m.LoginPage)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage)
      },
      {
        path: 'inventory',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'recepcionista'] },
        loadChildren: () => import('./features/inventory/inventory.routes').then((m) => m.INVENTORY_ROUTES)
      },
      {
        path: 'tattoos',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'tatuador'] },
        loadChildren: () => import('./features/tattoos/tattoos.routes').then((m) => m.TATTOOS_ROUTES)
      },
      {
        path: 'artists',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'tatuador'] },
        loadComponent: () => import('./features/artists/artists.page').then((m) => m.ArtistsPage)
      },
      {
        path: 'clients',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'tatuador', 'recepcionista'] },
        loadComponent: () => import('./features/clients/clients.page').then((m) => m.ClientsPage)
      },
      {
        path: 'appointments',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'tatuador', 'recepcionista'] },
        loadComponent: () => import('./features/appointments/appointments.page').then((m) => m.AppointmentsPage)
      },
      {
        path: 'sessions',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'tatuador'] },
        loadComponent: () => import('./features/sessions/sessions.page').then((m) => m.SessionsPage)
      },
      {
        path: 'reports',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'tatuador'] },
        loadComponent: () => import('./features/reports/reports.page').then((m) => m.ReportsPage)
      },
      {
        path: 'settings',
        canActivate: [roleGuard],
        data: { roles: ['admin'] },
        loadComponent: () => import('./features/settings/settings.page').then((m) => m.SettingsPage)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
