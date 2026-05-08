import { Injectable, computed } from '@angular/core';
import { GlobalSearchResult } from '../models/common.models';
import { AppointmentsService } from './appointments.service';
import { ArtistsService } from './artists.service';
import { ClientsService } from './clients.service';
import { InventoryService } from './inventory.service';
import { SessionsService } from './sessions.service';
import { TattooService } from './tattoo.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private readonly inventory: InventoryService,
    private readonly tattoos: TattooService,
    private readonly artists: ArtistsService,
    private readonly clients: ClientsService,
    private readonly appointments: AppointmentsService,
    private readonly sessions: SessionsService
  ) {}

  readonly results = computed<GlobalSearchResult[]>(() => [
    ...this.inventory.products().map((item) => ({
      id: item.id,
      label: item.nombre,
      type: 'Producto',
      route: '/inventory/products',
      meta: item.categoria
    })),
    ...this.tattoos.tattoos().map((item) => ({
      id: item.id,
      label: item.nombre,
      type: 'Diseño',
      route: '/tattoos',
      meta: item.estilo
    })),
    ...this.artists.artists().map((item) => ({
      id: item.id,
      label: item.nombre,
      type: 'Tatuador',
      route: '/artists',
      meta: item.especialidad
    })),
    ...this.clients.clients().map((item) => ({
      id: item.id,
      label: item.nombre,
      type: 'Cliente',
      route: '/clients',
      meta: item.email
    })),
    ...this.appointments.appointments().map((item) => ({
      id: item.id,
      label: `${item.clienteNombre} · ${item.hora}`,
      type: 'Cita',
      route: '/appointments',
      meta: item.estado
    })),
    ...this.sessions.sessions().map((item) => ({
      id: item.id,
      label: `${item.clienteNombre} · ${item.progreso}%`,
      type: 'Sesión',
      route: '/sessions',
      meta: item.estado
    }))
  ]);

  search(query: string) {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [];
    }
    return this.results().filter((item) => `${item.label} ${item.type} ${item.meta ?? ''}`.toLowerCase().includes(q)).slice(0, 8);
  }
}
