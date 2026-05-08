import { Injectable, computed } from '@angular/core';
import { mockArtists } from '../data/mock-data';
import { Artist, Availability } from '../models/artist.model';
import { createMemoryStore } from './memory-store.util';
import { uid } from '../utils/misc.util';

@Injectable({ providedIn: 'root' })
export class ArtistsService {
  private readonly store = createMemoryStore<Artist>(mockArtists);
  readonly artists = this.store.list;
  readonly availableCount = computed(() => this.artists().filter((item) => item.disponibilidad === 'Disponible').length);

  getById(id: string) {
    return this.artists().find((item) => item.id === id) ?? null;
  }

  save(artist: Partial<Artist> & { id?: string }) {
    const timestamp = new Date().toISOString();
    const next: Artist = {
      id: artist.id ?? uid('artist'),
      nombre: artist.nombre?.trim() || 'Tatuador sin nombre',
      especialidad: artist.especialidad ?? 'General',
      experiencia: Number(artist.experiencia ?? 0),
      disponibilidad: (artist.disponibilidad as Availability) ?? 'Disponible',
      redesSociales: artist.redesSociales ?? [],
      portfolio: artist.portfolio?.length ? artist.portfolio : mockArtists[0].portfolio,
      rating: Number(artist.rating ?? 4.5),
      bio: artist.bio ?? '',
      createdAt: artist.id ? this.getById(artist.id)?.createdAt ?? timestamp : timestamp,
      updatedAt: timestamp
    };
    this.store.upsert(next);
    return next;
  }

  remove(id: string) {
    this.store.remove(id);
  }
}
