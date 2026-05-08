import { Injectable, computed } from '@angular/core';
import { mockTattooDesigns } from '../data/mock-data';
import { TattooDesign, TattooDifficulty, TattooStyle } from '../models/tattoo.model';
import { createMemoryStore } from './memory-store.util';
import { uid } from '../utils/misc.util';

@Injectable({ providedIn: 'root' })
export class TattooService {
  private readonly store = createMemoryStore<TattooDesign>(mockTattooDesigns);
  readonly tattoos = this.store.list;
  readonly styles = computed(() => Array.from(new Set(this.tattoos().map((item) => item.estilo))));

  getById(id: string) {
    return this.tattoos().find((item) => item.id === id) ?? null;
  }

  save(tattoo: Partial<TattooDesign> & { id?: string }) {
    const timestamp = new Date().toISOString();
    const next: TattooDesign = {
      id: tattoo.id ?? uid('tat'),
      nombre: tattoo.nombre?.trim() || 'Diseño sin nombre',
      estilo: (tattoo.estilo as TattooStyle) ?? 'Fine Line',
      tamano: tattoo.tamano ?? '10 cm',
      dificultad: (tattoo.dificultad as TattooDifficulty) ?? 'Media',
      precioEstimado: Number(tattoo.precioEstimado ?? 0),
      duracionEstimado: tattoo.duracionEstimado ?? '2h',
      images: tattoo.images?.length ? tattoo.images : mockTattooDesigns[0].images,
      artistaAsignado: tattoo.artistaAsignado ?? 'Sin asignar',
      descripcion: tattoo.descripcion ?? '',
      createdAt: tattoo.id ? this.getById(tattoo.id)?.createdAt ?? timestamp : timestamp,
      updatedAt: timestamp
    };
    this.store.upsert(next);
    return next;
  }

  remove(id: string) {
    this.store.remove(id);
  }
}
