import { Injectable, computed, signal } from '@angular/core';
import { mockSettings } from '../data/mock-data';
import { StudioSettings } from '../models/settings.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private readonly settings = signal<StudioSettings>({ ...mockSettings });
  readonly value = computed(() => this.settings());

  update(patch: Partial<StudioSettings>) {
    this.settings.update((current) => ({ ...current, ...patch }));
  }

  reset() {
    this.settings.set({ ...mockSettings });
  }
}
