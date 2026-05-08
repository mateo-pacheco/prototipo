import { Injectable, computed } from '@angular/core';
import { mockClients } from '../data/mock-data';
import { Client } from '../models/client.model';
import { createMemoryStore } from './memory-store.util';
import { uid } from '../utils/misc.util';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  private readonly store = createMemoryStore<Client>(mockClients);
  readonly clients = this.store.list;
  readonly totalHistory = computed(() => this.clients().reduce((sum, item) => sum + item.tatuajesRealizados, 0));

  getById(id: string) {
    return this.clients().find((item) => item.id === id) ?? null;
  }

  save(client: Partial<Client> & { id?: string }) {
    const timestamp = new Date().toISOString();
    const next: Client = {
      id: client.id ?? uid('client'),
      nombre: client.nombre?.trim() || 'Cliente sin nombre',
      telefono: client.telefono ?? '',
      email: client.email ?? '',
      historial: client.historial ?? '',
      tatuajesRealizados: Number(client.tatuajesRealizados ?? 0),
      citas: Number(client.citas ?? 0),
      observaciones: client.observaciones ?? '',
      createdAt: client.id ? this.getById(client.id)?.createdAt ?? timestamp : timestamp,
      updatedAt: timestamp
    };
    this.store.upsert(next);
    return next;
  }

  remove(id: string) {
    this.store.remove(id);
  }
}
