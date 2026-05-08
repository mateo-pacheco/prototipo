import { Routes } from '@angular/router';
import { InventoryPage } from './inventory.page';

export const INVENTORY_ROUTES: Routes = [
  {
    path: 'products',
    component: InventoryPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  }
];
