import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArtistsService } from '../../core/services/artists.service';
import { Artist } from '../../core/models/artist.model';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog.component';
import { EntityFormDialogComponent } from '../../shared/ui/entity-form.dialog';
import { EntityDetailDialogComponent } from '../../shared/ui/entity-detail.dialog';
import { buildResponsiveDialogConfig } from '../../shared/ui/dialog-config';
import { AppDialogService } from '../../shared/ui/app-dialog.service';

@Component({
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent, EmptyStateComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Tatuadores" subtitle="Equipo de tatuadores con especialidades y disponibilidad.">
      <button actions type="button" class="inline-flex h-11 items-center gap-2 rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400" (click)="openForm()">
        <i class="fa-solid fa-plus"></i>
        Nuevo tatuador
      </button>
    </app-page-header>

    <section class="grid gap-4 md:grid-cols-3">
      <app-stat-card icon="fa-solid fa-users" label="Tatuadores" [value]="artists.artists().length" description="Equipo activo" />
      <app-stat-card icon="fa-solid fa-calendar-check" label="Disponibles" [value]="artists.availableCount()" description="Listos para agenda" badgeBackground="linear-gradient(135deg, #22c55e, #14b8a6)" />
      <app-stat-card icon="fa-solid fa-star" label="Rating medio" [value]="avgRating()" description="Calidad percibida" badgeBackground="linear-gradient(135deg, #f59e0b, #ec4899)" />
    </section>

    <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div class="grid gap-4 xl:grid-cols-[1fr_220px]">
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Buscar artista</span>
          <input
            [value]="query()"
            (input)="query.set(($any($event.target)).value)"
            placeholder="Nombre o especialidad"
            class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
          />
        </label>
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Disponibilidad</span>
          <select [value]="availability()" (change)="availability.set(($any($event.target)).value)" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10">
            <option value="" class="bg-slate-950">Todas</option>
            <option value="Disponible" class="bg-slate-950">Disponible</option>
            <option value="Ocupado" class="bg-slate-950">Ocupado</option>
            <option value="Vacaciones" class="bg-slate-950">Vacaciones</option>
          </select>
        </label>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article *ngFor="let artist of filtered()" class="group rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20">
          <div class="flex items-start gap-4">
            <img [src]="artist.portfolio[0]" [alt]="'Portafolio de ' + artist.nombre" class="h-20 w-20 rounded-[1.2rem] object-cover ring-1 ring-white/10" />
            <div class="min-w-0 flex-1">
              <h3 class="truncate text-lg font-semibold text-white">{{ artist.nombre }}</h3>
              <p class="truncate text-sm text-slate-500">{{ artist.especialidad }}</p>
              <span
                class="mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium"
                [ngClass]="{
                  'bg-green-500/15 text-green-300': artist.disponibilidad === 'Disponible',
                  'bg-amber-500/15 text-amber-300': artist.disponibilidad !== 'Disponible'
                }"
              >
                {{ artist.disponibilidad }}
              </span>
            </div>
          </div>

          <p class="mt-4 line-clamp-2 text-sm text-slate-400">{{ artist.bio }}</p>

          <div class="mt-4 flex items-center justify-between gap-3">
            <div class="flex items-center gap-4 text-sm text-slate-400">
              <span class="flex items-center gap-1"><i class="fa-solid fa-clock text-base"></i> {{ artist.experiencia }} años</span>
              <span class="flex items-center gap-1 text-amber-300"><i class="fa-solid fa-star text-base"></i> {{ artist.rating }}</span>
            </div>
            <div class="flex gap-2">
              <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10" (click)="detail(artist)"><i class="fa-solid fa-eye text-lg"></i></button>
              <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10" (click)="openForm(artist)"><i class="fa-solid fa-pen text-lg"></i></button>
              <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-300 transition hover:bg-red-500/10" (click)="remove(artist)"><i class="fa-solid fa-trash text-lg"></i></button>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap gap-2">
            <span *ngFor="let social of artist.redesSociales" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{{ social }}</span>
          </div>
        </article>
      </div>

      <div *ngIf="filtered().length === 0" class="mt-6">
        <app-empty-state icon="fa-solid fa-users" title="Sin tatuadores" message="No hay coincidencias para los filtros actuales."></app-empty-state>
      </div>
    </div>
    </div>
  `
})
export class ArtistsPage {
  readonly artists = inject(ArtistsService);
  private readonly dialog = inject(AppDialogService);
  private readonly snack = inject(MatSnackBar);
  readonly query = signal('');
  readonly availability = signal('');

  readonly filtered = computed(() => {
    const q = this.query().toLowerCase();
    return this.artists.artists().filter((item) => {
      const matchesQuery = !q || `${item.nombre} ${item.especialidad}`.toLowerCase().includes(q);
      const matchesAvailability = !this.availability() || item.disponibilidad === this.availability();
      return matchesQuery && matchesAvailability;
    });
  });

  readonly avgRating = computed(() => {
    const items = this.artists.artists();
    return items.length ? (items.reduce((sum, item) => sum + item.rating, 0) / items.length).toFixed(1) : '0.0';
  });

  openForm(artist?: Artist) {
    const ref = this.dialog.open(EntityFormDialogComponent, {
      ...buildResponsiveDialogConfig('600px'),
      data: {
        title: artist ? 'Editar tatuador' : 'Nuevo tatuador',
        subtitle: 'Datos del tatuador.',
        value: artist ?? undefined,
        fields: [
          { key: 'nombre', label: 'Nombre', type: 'text', required: true },
          { key: 'especialidad', label: 'Especialidad', type: 'text', required: true },
          { key: 'experiencia', label: 'Años de experiencia', type: 'number', required: true },
          { key: 'disponibilidad', label: 'Disponibilidad', type: 'select', required: true, options: [
            { label: 'Disponible', value: 'Disponible' },
            { label: 'Ocupado', value: 'Ocupado' },
            { label: 'Vacaciones', value: 'Vacaciones' }
          ]},
          { key: 'rating', label: 'Rating (1-5)', type: 'number', required: true },
          { key: 'bio', label: 'Biografía', type: 'textarea', required: false }
        ]
      }
    });
    ref.afterClosed().subscribe((value) => {
      if (!value) return;
      this.artists.save({ ...artist, ...value });
      this.snack.open(artist ? 'Tatuador actualizado' : 'Tatuador creado', 'Cerrar');
    });
  }

  detail(artist: Artist) {
    this.dialog.open(EntityDetailDialogComponent, {
      ...buildResponsiveDialogConfig('500px'),
      data: {
        title: artist.nombre,
        subtitle: artist.especialidad,
        image: artist.portfolio[0],
        rows: [
          { label: 'Experiencia', value: `${artist.experiencia} años` },
          { label: 'Disponibilidad', value: artist.disponibilidad },
          { label: 'Rating', value: artist.rating.toString() },
          { label: 'Redes sociales', value: artist.redesSociales.join(', ') }
        ]
      }
    });
  }

  remove(artist: Artist) {
    this.dialog
      .open(ConfirmDialogComponent, {
        ...buildResponsiveDialogConfig('400px'),
        data: { title: 'Eliminar tatuador', message: `¿Eliminar a ${artist.nombre}?`, confirmLabel: 'Eliminar', tone: 'danger' }
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.artists.remove(artist.id);
        this.snack.open('Tatuador eliminado', 'Cerrar');
      });
  }
}
