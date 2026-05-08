import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { mockUsers } from '../../core/data/mock-data';
import { SettingsService } from '../../core/services/settings.service';
import { ThemeService } from '../../core/services/theme.service';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeaderComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Configuración" subtitle="Perfil del estudio, preferencias visuales y parámetros de la aplicación."></app-page-header>

      <div class="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
      <form [formGroup]="form" class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <p class="text-xs uppercase tracking-[0.28em] text-slate-500">Estudio</p>
        <h3 class="mt-2 text-2xl font-semibold text-white">Perfil y apariencia</h3>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div class="md:col-span-1">
            <label class="mb-2 block text-sm font-medium text-slate-200">Nombre</label>
            <input formControlName="studioName" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10" />
          </div>
          <div class="md:col-span-1">
            <label class="mb-2 block text-sm font-medium text-slate-200">Tagline</label>
            <input formControlName="tagline" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10" />
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-200">Email</label>
            <input formControlName="contactEmail" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10" />
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-200">Teléfono</label>
            <input formControlName="phone" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10" />
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-200">Moneda</label>
            <select formControlName="currency" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10">
              <option value="USD" class="bg-slate-950">USD</option>
              <option value="EUR" class="bg-slate-950">EUR</option>
              <option value="COP" class="bg-slate-950">COP</option>
              <option value="MXN" class="bg-slate-950">MXN</option>
            </select>
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-200">Color acento</label>
            <input formControlName="accent" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10" />
          </div>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <button type="button" class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10" (click)="toggleTheme()">
            {{ theme.isDark() ? 'Cambiar a claro' : 'Cambiar a oscuro' }}
          </button>
          <button type="button" class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10" (click)="form.patchValue({ compactDensity: !form.value.compactDensity })">
            {{ form.value.compactDensity ? 'Densidad normal' : 'Densidad compacta' }}
          </button>
        </div>

        <div class="mt-6 flex gap-3">
          <button type="button" class="inline-flex h-11 items-center justify-center rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400" (click)="save()">Guardar</button>
          <button type="button" class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10" (click)="reset()">Restablecer</button>
        </div>
      </form>

      <div class="space-y-6">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <p class="text-xs uppercase tracking-[0.28em] text-slate-500">Usuarios demo</p>
          <div class="mt-4 space-y-3">
            <div *ngFor="let user of users()" class="rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-4">
              <div class="flex items-center gap-3">
                <img [src]="user.avatar" alt="" class="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10" />
                <div>
                  <p class="font-medium text-white">{{ user.name }}</p>
                  <p class="text-sm text-slate-500">{{ user.role }} · {{ user.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold text-white">Notas del producto</h3>
          <p class="mt-3 text-sm leading-6 text-slate-400">
            Los cambios se guardan en memoria mientras la sesión está abierta. Esta vista centraliza el control visual del estudio y los ajustes globales.
          </p>
        </div>
      </div>
    </div>
    </div>
  `
})
export class SettingsPage {
  private readonly fb = inject(FormBuilder);
  readonly settings = inject(SettingsService);
  readonly theme = inject(ThemeService);

  form = this.fb.nonNullable.group({
    studioName: [this.settings.value().studioName],
    tagline: [this.settings.value().tagline],
    contactEmail: [this.settings.value().contactEmail],
    phone: [this.settings.value().phone],
    currency: [this.settings.value().currency],
    compactDensity: [this.settings.value().compactDensity],
    accent: [this.settings.value().accent]
  });

  readonly users = computed(() =>
    mockUsers.map((user) => ({
      name: user.name,
      role: user.role,
      title: user.title,
      avatar: user.avatar
    }))
  );

  toggleTheme() {
    this.theme.toggle();
  }

  save() {
    this.settings.update(this.form.getRawValue());
  }

  reset() {
    this.settings.reset();
    this.form.reset({
      studioName: this.settings.value().studioName,
      tagline: this.settings.value().tagline,
      contactEmail: this.settings.value().contactEmail,
      phone: this.settings.value().phone,
      currency: this.settings.value().currency,
      compactDensity: this.settings.value().compactDensity,
      accent: this.settings.value().accent
    });
    this.theme.setDarkMode(this.settings.value().darkMode);
  }
}
