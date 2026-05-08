import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentsService } from '../../core/services/appointments.service';
import { ClientsService } from '../../core/services/clients.service';
import { ArtistsService } from '../../core/services/artists.service';
import { TattooService } from '../../core/services/tattoo.service';
import { Appointment, AppointmentStatus } from '../../core/models/appointment.model';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog.component';
import { EntityFormDialogComponent } from '../../shared/ui/entity-form.dialog';

@Component({
  standalone: true,
  imports: [CommonModule, DragDropModule, MatIconModule, PageHeaderComponent, StatCardComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Citas" subtitle="Gestión de citas con tablero visual.">
      <button actions type="button" class="inline-flex h-11 items-center gap-2 rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400" (click)="openForm()">
        <mat-icon>add</mat-icon>
        Nueva cita
      </button>
    </app-page-header>

    <section class="grid gap-4 md:grid-cols-3">
      <app-stat-card icon="event" label="Citas" [value]="appointments.appointments().length" description="Total registradas" />
      <app-stat-card icon="pending" label="Pendientes" [value]="appointments.pendingCount()" description="Requieren confirmación" badgeBackground="linear-gradient(135deg, #f59e0b, #ef4444)" />
      <app-stat-card icon="verified" label="Confirmadas" [value]="confirmedCount()" description="Listas para atender" badgeBackground="linear-gradient(135deg, #22c55e, #14b8a6)" />
    </section>

    <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <p class="mb-4 text-sm text-slate-400">Arrastra las tarjetas entre estados para actualizar.</p>

      <div class="grid gap-4 xl:grid-cols-4">
        <section *ngFor="let lane of lanes" class="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-4">
          <div class="mb-4 flex items-center justify-between">
            <h3 class="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">{{ lane }}</h3>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{{ grouped()[lane].length }}</span>
          </div>

          <div cdkDropList [cdkDropListData]="grouped()[lane]" [cdkDropListConnectedTo]="laneIds" (cdkDropListDropped)="drop($event, lane)" class="min-h-[220px] space-y-3">
            <article *ngFor="let item of grouped()[lane]" cdkDrag class="cursor-move rounded-[1.35rem] border border-white/10 bg-white/5 p-4 transition hover:border-white/20">
              <div class="flex items-start justify-between gap-2">
                <div class="min-w-0 flex-1">
                  <p class="truncate font-medium text-white">{{ item.clienteNombre }}</p>
                  <p class="truncate text-sm text-slate-400">{{ item.disenoNombre }}</p>
                  <p class="mt-2 text-xs text-slate-500">{{ item.fecha }} · {{ item.hora }}</p>
                  <p class="text-xs text-slate-500">{{ item.tatuadorNombre }}</p>
                </div>
                <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-red-300 transition hover:bg-red-500/10" (click)="remove(item); $event.stopPropagation()">
                  <mat-icon class="!text-base">delete</mat-icon>
                </button>
              </div>

              <div class="mt-3 flex gap-2">
                <button type="button" class="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10" (click)="edit(item)">Editar</button>
                <button type="button" class="inline-flex flex-1 items-center justify-center rounded-2xl bg-violet-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-400" (click)="advance(item)">
                  {{ item.estado === 'finalizada' ? 'Cerrar' : 'Avanzar' }}
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
    </div>
  `
})
export class AppointmentsPage {
  readonly appointments = inject(AppointmentsService);
  readonly clients = inject(ClientsService);
  readonly artists = inject(ArtistsService);
  readonly tattoos = inject(TattooService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  readonly lanes = ['pendiente', 'confirmada', 'cancelada', 'finalizada'] as const;
  readonly laneIds = ['pendiente', 'confirmada', 'cancelada', 'finalizada'];

  readonly grouped = computed(() =>
    this.lanes.reduce((acc, lane) => {
      acc[lane] = this.appointments.appointments().filter((item) => item.estado === lane);
      return acc;
    }, {} as Record<string, Appointment[]>)
  );

  readonly confirmedCount = computed(() => this.appointments.appointments().filter((item) => item.estado === 'confirmada').length);

  drop(event: CdkDragDrop<Appointment[]>, lane: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    const item = event.container.data[event.currentIndex];
    this.appointments.save({ ...item, estado: lane as AppointmentStatus });
    this.snack.open(`Cita movida a ${lane}`, 'Cerrar');
  }

  advance(item: Appointment) {
    const order = ['pendiente', 'confirmada', 'finalizada'] as const;
    const index = order.indexOf(item.estado as any);
    const next = order[Math.min(index + 1, order.length - 1)];
    this.appointments.save({ ...item, estado: next as AppointmentStatus });
  }

  openForm() {
    const clientOptions = this.clients.clients().map((item) => ({ label: item.nombre, value: item.id }));
    const artistOptions = this.artists.artists().map((item) => ({ label: item.nombre, value: item.id }));
    const designOptions = this.tattoos.tattoos().map((item) => ({ label: item.nombre, value: item.id }));

    const ref = this.dialog.open(EntityFormDialogComponent, {
      width: '600px',
      data: {
        title: 'Nueva cita',
        subtitle: 'Selecciona cliente, tatuador y diseño.',
        fields: [
          { key: 'clienteId', label: 'Cliente', type: 'select', required: true, options: clientOptions },
          { key: 'tatuadorId', label: 'Tatuador', type: 'select', required: true, options: artistOptions },
          { key: 'disenoId', label: 'Diseño', type: 'select', required: true, options: designOptions },
          { key: 'fecha', label: 'Fecha', type: 'date', required: true },
          { key: 'hora', label: 'Hora', type: 'time', required: true },
          { key: 'estado', label: 'Estado', type: 'select', required: true, options: [
            { label: 'Pendiente', value: 'pendiente' },
            { label: 'Confirmada', value: 'confirmada' },
            { label: 'Cancelada', value: 'cancelada' },
            { label: 'Finalizada', value: 'finalizada' }
          ]},
          { key: 'notas', label: 'Notas', type: 'textarea', required: false }
        ]
      }
    });

    ref.afterClosed().subscribe((value) => {
      if (!value) return;
      this.appointments.save({
        ...value,
        clienteNombre: this.clients.getById(value.clienteId)?.nombre ?? value.clienteId,
        tatuadorNombre: this.artists.getById(value.tatuadorId)?.nombre ?? value.tatuadorId,
        disenoNombre: this.tattoos.getById(value.disenoId)?.nombre ?? value.disenoId
      } as Appointment);
      this.snack.open('Cita creada', 'Cerrar');
    });
  }

  edit(item: Appointment) {
    const clientOptions = this.clients.clients().map((c) => ({ label: c.nombre, value: c.id }));
    const artistOptions = this.artists.artists().map((a) => ({ label: a.nombre, value: a.id }));
    const designOptions = this.tattoos.tattoos().map((t) => ({ label: t.nombre, value: t.id }));

    const ref = this.dialog.open(EntityFormDialogComponent, {
      width: '600px',
      data: {
        title: 'Editar cita',
        subtitle: 'Actualiza los datos de la cita.',
        value: item,
        fields: [
          { key: 'clienteId', label: 'Cliente', type: 'select', required: true, options: clientOptions },
          { key: 'tatuadorId', label: 'Tatuador', type: 'select', required: true, options: artistOptions },
          { key: 'disenoId', label: 'Diseño', type: 'select', required: true, options: designOptions },
          { key: 'fecha', label: 'Fecha', type: 'date', required: true },
          { key: 'hora', label: 'Hora', type: 'time', required: true },
          { key: 'estado', label: 'Estado', type: 'select', required: true, options: [
            { label: 'Pendiente', value: 'pendiente' },
            { label: 'Confirmada', value: 'confirmada' },
            { label: 'Cancelada', value: 'cancelada' },
            { label: 'Finalizada', value: 'finalizada' }
          ]},
          { key: 'notas', label: 'Notas', type: 'textarea', required: false }
        ]
      }
    });

    ref.afterClosed().subscribe((value) => {
      if (!value) return;
      this.appointments.save({
        ...item,
        ...value,
        clienteNombre: this.clients.getById(value.clienteId)?.nombre ?? item.clienteNombre,
        tatuadorNombre: this.artists.getById(value.tatuadorId)?.nombre ?? item.tatuadorNombre,
        disenoNombre: this.tattoos.getById(value.disenoId)?.nombre ?? item.disenoNombre
      });
      this.snack.open('Cita actualizada', 'Cerrar');
    });
  }

  remove(item: Appointment) {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '400px',
        data: { title: 'Eliminar cita', message: `¿Eliminar la cita de ${item.clienteNombre}?`, confirmLabel: 'Eliminar', tone: 'danger' }
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.appointments.remove(item.id);
        this.snack.open('Cita eliminada', 'Cerrar');
      });
  }
}
