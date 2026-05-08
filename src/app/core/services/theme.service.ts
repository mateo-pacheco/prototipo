import { Injectable, computed, effect, signal } from '@angular/core';
import { mockSettings } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly dark = signal(mockSettings.darkMode);

  readonly isDark = computed(() => this.dark());

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.dark() ? 'dark' : 'light');
    });
  }

  setDarkMode(value: boolean) {
    this.dark.set(value);
  }

  toggle() {
    this.dark.update((current) => !current);
  }
}
