import { Injectable, computed } from '@angular/core';
import { mockSessions } from '../data/mock-data';
import { TattooSession } from '../models/session.model';
import { createMemoryStore } from './memory-store.util';
import { uid } from '../utils/misc.util';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  private readonly store = createMemoryStore<TattooSession>(mockSessions);
  readonly sessions = this.store.list;
  readonly activeCount = computed(() => this.sessions().filter((item) => item.estado !== 'finalizada').length);

  getById(id: string) {
    return this.sessions().find((item) => item.id === id) ?? null;
  }

  save(session: Partial<TattooSession> & { id?: string }) {
    const timestamp = new Date().toISOString();
    const next: TattooSession = {
      id: session.id ?? uid('sess'),
      clienteId: session.clienteId ?? '',
      clienteNombre: session.clienteNombre ?? 'Sin cliente',
      tatuadorId: session.tatuadorId ?? '',
      tatuadorNombre: session.tatuadorNombre ?? 'Sin tatuador',
      duracion: Number(session.duracion ?? 0),
      progreso: Number(session.progreso ?? 0),
      notas: session.notas ?? '',
      fotos: session.fotos?.length ? session.fotos : mockSessions[0].fotos,
      materiales: session.materiales ?? [],
      costo: Number(session.costo ?? 0),
      estado: session.estado ?? 'activa',
      createdAt: session.id ? this.getById(session.id)?.createdAt ?? timestamp : timestamp,
      updatedAt: timestamp
    };
    this.store.upsert(next);
    return next;
  }

  remove(id: string) {
    this.store.remove(id);
  }
}
