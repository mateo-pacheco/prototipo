import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsService } from '../../core/services/clients.service';
import { Client } from '../../core/models/client.model';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog.component';
import { EntityFormDialogComponent } from '../../shared/ui/entity-form.dialog';
import { EntityDetailDialogComponent } from '../../shared/ui/entity-detail.dialog';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule, PageHeaderComponent, StatCardComponent, EmptyStateComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Clientes" subtitle="Gestión de clientes con historial, citas y observaciones.">
      <button actions type="button" class="inline-flex h-11 items-center gap-2 rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400" (click)="openForm()">
        <mat-icon>add</mat-icon>
        Nuevo cliente
      </button>
    </app-page-header>

    <section class="grid gap-4 md:grid-cols-3">
      <app-stat-card icon="people" label="Clientes" [value]="clients.clients().length" description="Base activa" />
      <app-stat-card icon="history" label="Tatuajes realizados" [value]="clients.totalHistory()" description="Historial acumulado" badgeBackground="linear-gradient(135deg, #0ea5e9, #22c55e)" />
      <app-stat-card icon="call" label="Contacto activo" [value]="contacts()" description="Email y teléfono disponibles" badgeBackground="linear-gradient(135deg, #7c3aed, #ec4899)" />
    </section>

    <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div class="grid gap-4 xl:grid-cols-[1fr_220px]">
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Buscar cliente</span>
          <input
            [value]="query()"
            (input)="query.set(($any($event.target)).value)"
            placeholder="Nombre, email o teléfono"
            class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
          />
        </label>
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Ordenar por</span>
          <select [value]="sortBy()" (change)="sortBy.set(($any($event.target)).value)" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10">
            <option value="nombre" class="bg-slate-950">Nombre</option>
            <option value="citas" class="bg-slate-950">Citas</option>
            <option value="tatuajes" class="bg-slate-950">Tatuajes</option>
          </select>
        </label>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article *ngFor="let client of sorted()" class="group rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-white/20">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <h3 class="truncate text-lg font-semibold text-white">{{ client.nombre }}</h3>
              <p class="truncate text-sm text-slate-500">{{ client.email }}</p>
            </div>
            <div class="flex gap-2">
              <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10" (click)="detail(client)"><mat-icon class="!text-lg">visibility</mat-icon></button>
              <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10" (click)="openForm(client)"><mat-icon class="!text-lg">edit</mat-icon></button>
              <button type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-300 transition hover:bg-red-500/10" (click)="remove(client)"><mat-icon class="!text-lg">delete</mat-icon></button>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
              <p class="text-2xl font-bold text-white">{{ client.citas }}</p>
              <p class="text-xs text-slate-500">Citas</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
              <p class="text-2xl font-bold text-white">{{ client.tatuajesRealizados }}</p>
              <p class="text-xs text-slate-500">Tatuajes</p>
            </div>
          </div>

          <p class="mt-4 line-clamp-2 text-sm text-slate-400">{{ client.observaciones }}</p>

          <div class="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <mat-icon class="!text-base">phone</mat-icon>
            <span class="truncate">{{ client.telefono }}</span>
          </div>
        </article>
      </div>

      <div *ngIf="sorted().length === 0" class="mt-6">
        <app-empty-state icon="people" title="Sin clientes" message="No se encontraron coincidencias."></app-empty-state>
      </div>
    </div>
    </div>
  `
})
export class ClientsPage {
  readonly clients = inject(ClientsService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  readonly query = signal('');
  readonly sortBy = signal<'nombre' | 'citas' | 'tatuajes'>('nombre');

  readonly filtered = computed(() => {
    const q = this.query().toLowerCase();
    return this.clients.clients().filter((item) => !q || `${item.nombre} ${item.email} ${item.telefono}`.toLowerCase().includes(q));
  });

  readonly sorted = computed(() => {
    const sortedBy = this.sortBy();
    return [...this.filtered()].sort((a, b) => {
      if (sortedBy === 'citas') return b.citas - a.citas;
      if (sortedBy === 'tatuajes') return b.tatuajesRealizados - a.tatuajesRealizados;
      return a.nombre.localeCompare(b.nombre);
    });
  });

  readonly contacts = computed(() => this.clients.clients().filter((item) => !!item.email && !!item.telefono).length);

  openForm(client?: Client) {
    const ref = this.dialog.open(EntityFormDialogComponent, {
      width: '600px',
      data: {
        title: client ? 'Editar cliente' : 'Nuevo cliente',
        subtitle: 'Gestiona los datos del cliente.',
        value: client ?? undefined,
        fields: [
          { key: 'nombre', label: 'Nombre', type: 'text', required: true },
          { key: 'telefono', label: 'Teléfono', type: 'text', required: true },
          { key: 'email', label: 'Email', type: 'text', required: true },
          { key: 'observaciones', label: 'Observaciones', type: 'textarea', required: false }
        ]
      }
    });
    ref.afterClosed().subscribe((value) => {
      if (!value) return;
      this.clients.save({ ...client, ...value });
      this.snack.open(client ? 'Cliente actualizado' : 'Cliente creado', 'Cerrar');
    });
  }

  detail(client: Client) {
    this.dialog.open(EntityDetailDialogComponent, {
      width: '500px',
      data: {
        title: client.nombre,
        subtitle: client.email,
        rows: [
          { label: 'Teléfono', value: client.telefono },
          { label: 'Citas', value: client.citas.toString() },
          { label: 'Tatuajes realizados', value: client.tatuajesRealizados.toString() },
          { label: 'Historial', value: client.historial },
          { label: 'Observaciones', value: client.observaciones }
        ]
      }
    });
  }

  remove(client: Client) {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '400px',
        data: { title: 'Eliminar cliente', message: `¿Eliminar a ${client.nombre}?`, confirmLabel: 'Eliminar', tone: 'danger' }
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.clients.remove(client.id);
        this.snack.open('Cliente eliminado', 'Cerrar');
      });
  }
}
