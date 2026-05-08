import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TattooService } from '../../core/services/tattoo.service';
import { TattooDesign } from '../../core/models/tattoo.model';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog.component';
import { EntityFormDialogComponent } from '../../shared/ui/entity-form.dialog';
import { EntityDetailDialogComponent } from '../../shared/ui/entity-detail.dialog';
import { buildResponsiveDialogConfig } from '../../shared/ui/dialog-config';
import { AppDialogService } from '../../shared/ui/app-dialog.service';
import { formatMoney, formatDateTime } from '../../core/utils/misc.util';

@Component({
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent, EmptyStateComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Catálogo de tatuajes" subtitle="Diseños disponibles con precio, estilo y dificultad.">
      <button actions type="button" class="inline-flex h-11 items-center gap-2 rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400" (click)="openForm()">
        <i class="fa-solid fa-plus"></i>
        Nuevo diseño
      </button>
    </app-page-header>

    <section class="grid gap-4 md:grid-cols-3">
      <app-stat-card icon="fa-solid fa-paintbrush" label="Diseños" [value]="tattoos.tattoos().length" description="Catálogo disponible" />
      <app-stat-card icon="fa-solid fa-palette" label="Estilos" [value]="tattoos.styles().length" description="Variedad creativa" badgeBackground="linear-gradient(135deg, #0ea5e9, #14b8a6)" />
      <app-stat-card icon="fa-solid fa-clock" label="Precio medio" [value]="formatMoney(avgPrice())" description="Estimado por diseño" badgeBackground="linear-gradient(135deg, #ec4899, #7c3aed)" />
    </section>

    <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div class="grid gap-4 xl:grid-cols-[1fr_220px]">
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Buscar diseño</span>
          <input [value]="query()" (input)="query.set(($any($event.target)).value)" placeholder="Nombre o artista" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10" />
        </label>
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Estilo</span>
          <select [value]="style()" (change)="style.set(($any($event.target)).value)" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10">
            <option value="" class="bg-slate-950">Todos</option>
            <option *ngFor="let item of tattoos.styles()" [value]="item" class="bg-slate-950">{{ item }}</option>
          </select>
        </label>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article *ngFor="let tattoo of filtered()" class="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20">
          <img [src]="tattoo.images[0]" [alt]="tattoo.nombre" class="h-52 w-full rounded-[1.25rem] object-cover ring-1 ring-white/10" />
          <div class="mt-4">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <h3 class="truncate text-lg font-semibold text-white">{{ tattoo.nombre }}</h3>
                <p class="truncate text-sm text-slate-500">{{ tattoo.estilo }} · {{ tattoo.artistaAsignado }}</p>
              </div>
              <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">{{ tattoo.dificultad }}</span>
            </div>

            <p class="mt-3 line-clamp-2 text-sm text-slate-400">{{ tattoo.descripcion }}</p>

            <div class="mt-4 flex items-center justify-between text-sm">
              <div class="text-slate-500">
                <span>{{ tattoo.tamano }}</span>
                <span class="mx-2">·</span>
                <span>{{ tattoo.duracionEstimado }}</span>
              </div>
              <span class="text-lg font-semibold text-emerald-300">{{ formatMoney(tattoo.precioEstimado) }}</span>
            </div>

            <div class="mt-4 flex gap-2">
              <button type="button" class="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10" (click)="detail(tattoo)">Ver</button>
              <button type="button" class="inline-flex flex-1 items-center justify-center rounded-2xl bg-violet-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-violet-400" (click)="openForm(tattoo)">Editar</button>
              <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-300 transition hover:bg-red-500/10" (click)="remove(tattoo)"><i class="fa-solid fa-trash text-lg"></i></button>
            </div>
          </div>
        </article>
      </div>

      <div *ngIf="filtered().length === 0" class="mt-6">
        <app-empty-state icon="fa-solid fa-paintbrush" title="Sin diseños" message="Prueba otro filtro o crea un nuevo diseño."></app-empty-state>
      </div>
    </div>
    </div>
  `
})
export class TattoosPage {
  readonly tattoos = inject(TattooService);
  private readonly dialog = inject(AppDialogService);
  private readonly snack = inject(MatSnackBar);
  readonly query = signal('');
  readonly style = signal('');
  readonly formatMoney = formatMoney;

  readonly filtered = computed(() => {
    const q = this.query().toLowerCase();
    return this.tattoos.tattoos().filter((item) => {
      const matchesQuery = !q || `${item.nombre} ${item.artistaAsignado}`.toLowerCase().includes(q);
      const matchesStyle = !this.style() || item.estilo === this.style();
      return matchesQuery && matchesStyle;
    });
  });

  readonly avgPrice = computed(() => {
    const items = this.tattoos.tattoos();
    return items.length ? items.reduce((sum, item) => sum + item.precioEstimado, 0) / items.length : 0;
  });

  openForm(tattoo?: TattooDesign) {
    const ref = this.dialog.open(EntityFormDialogComponent, {
      ...buildResponsiveDialogConfig('600px'),
      data: {
        title: tattoo ? 'Editar diseño' : 'Nuevo diseño',
        subtitle: 'Datos del diseño.',
        value: tattoo ?? undefined,
        fields: [
          { key: 'nombre', label: 'Nombre', type: 'text', required: true },
          { key: 'estilo', label: 'Estilo', type: 'select', required: true, options: [
            { label: 'Blackwork', value: 'Blackwork' },
            { label: 'Traditional', value: 'Traditional' },
            { label: 'Realismo', value: 'Realismo' },
            { label: 'Fine Line', value: 'Fine Line' },
            { label: 'Japanese', value: 'Japanese' },
            { label: 'Neo Traditional', value: 'Neo Traditional' },
            { label: 'Lettering', value: 'Lettering' }
          ]},
          { key: 'tamano', label: 'Tamaño', type: 'text', required: true },
          { key: 'dificultad', label: 'Dificultad', type: 'select', required: true, options: [
            { label: 'Baja', value: 'Baja' },
            { label: 'Media', value: 'Media' },
            { label: 'Alta', value: 'Alta' },
            { label: 'Experto', value: 'Experto' }
          ]},
          { key: 'precioEstimado', label: 'Precio', type: 'number', required: true },
          { key: 'duracionEstimado', label: 'Duración', type: 'text', required: true },
          { key: 'artistaAsignado', label: 'Artista', type: 'text', required: true },
          { key: 'descripcion', label: 'Descripción', type: 'textarea', required: false }
        ]
      }
    });

    ref.afterClosed().subscribe((value) => {
      if (!value) return;
      this.tattoos.save({ ...tattoo, ...value });
      this.snack.open(tattoo ? 'Diseño actualizado' : 'Diseño creado', 'Cerrar');
    });
  }

  detail(tattoo: TattooDesign) {
    this.dialog.open(EntityDetailDialogComponent, {
      ...buildResponsiveDialogConfig('500px'),
      data: {
        title: tattoo.nombre,
        subtitle: tattoo.estilo,
        image: tattoo.images[0],
        rows: [
          { label: 'Tamaño', value: tattoo.tamano },
          { label: 'Dificultad', value: tattoo.dificultad },
          { label: 'Precio', value: formatMoney(tattoo.precioEstimado) },
          { label: 'Duración', value: tattoo.duracionEstimado },
          { label: 'Artista', value: tattoo.artistaAsignado },
          { label: 'Actualizado', value: formatDateTime(tattoo.updatedAt) }
        ]
      }
    });
  }

  remove(tattoo: TattooDesign) {
    this.dialog
      .open(ConfirmDialogComponent, {
        ...buildResponsiveDialogConfig('400px'),
        data: { title: 'Eliminar diseño', message: `¿Eliminar ${tattoo.nombre}?`, confirmLabel: 'Eliminar', tone: 'danger' }
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.tattoos.remove(tattoo.id);
        this.snack.open('Diseño eliminado', 'Cerrar');
      });
  }
}
