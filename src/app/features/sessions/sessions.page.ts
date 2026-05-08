import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { SessionsService } from '../../core/services/sessions.service';
import { TattooSession } from '../../core/models/session.model';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state.component';
import { EntityDetailDialogComponent } from '../../shared/ui/entity-detail.dialog';
import { buildResponsiveDialogConfig } from '../../shared/ui/dialog-config';
import { AppDialogService } from '../../shared/ui/app-dialog.service';

@Component({
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent, EmptyStateComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Sesiones" subtitle="Seguimiento de sesiones de tatuaje en progreso."></app-page-header>

    <section class="grid gap-4 md:grid-cols-3">
      <app-stat-card icon="fa-solid fa-heart-pulse" label="Sesiones" [value]="sessions.sessions().length" description="Historial total" />
      <app-stat-card icon="fa-solid fa-circle-play" label="Activas" [value]="sessions.activeCount()" description="En ejecución" badgeBackground="linear-gradient(135deg, #0ea5e9, #22c55e)" />
      <app-stat-card icon="fa-solid fa-money-bill-wave" label="Costo acumulado" [value]="'$' + totalCost()" description="Total facturado" badgeBackground="linear-gradient(135deg, #7c3aed, #ec4899)" />
    </section>

    <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div *ngIf="sessions.sessions().length > 0" class="grid gap-4 xl:grid-cols-2">
        <article *ngFor="let item of sessions.sessions()" class="rounded-[1.7rem] border border-white/10 bg-slate-950/40 p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold text-white">{{ item.clienteNombre }}</h3>
              <p class="text-sm text-slate-500">{{ item.tatuadorNombre }}</p>
            </div>
            <span
              class="rounded-full px-3 py-1 text-xs font-medium"
              [ngClass]="{
                'bg-blue-500/15 text-blue-300': item.estado === 'activa',
                'bg-emerald-500/15 text-emerald-300': item.estado !== 'activa'
              }"
            >
              {{ item.estado }}
            </span>
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500">Progreso</span>
              <span class="font-medium text-white">{{ item.progreso }}%</span>
            </div>
            <div class="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div class="h-full rounded-full bg-gradient-to-r from-violet-500 to-teal-400" [style.width.%]="item.progreso"></div>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="text-xs text-slate-500">Duración</p>
              <p class="font-medium text-white">{{ item.duracion }} min</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p class="text-xs text-slate-500">Costo</p>
              <p class="font-medium text-white">{{ '$' + item.costo }}</p>
            </div>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span *ngFor="let m of item.materiales" class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{{ m }}</span>
          </div>

          <p class="mt-4 line-clamp-2 text-sm text-slate-400">{{ item.notas }}</p>

          <button type="button" class="mt-5 inline-flex h-11 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-medium text-slate-200 transition hover:bg-white/10" (click)="detail(item)">
            Ver detalle
          </button>
        </article>
      </div>

      <app-empty-state *ngIf="sessions.sessions().length === 0" icon="fa-solid fa-heart-pulse" title="Sin sesiones" message="Crea sesiones desde las citas o el historial."></app-empty-state>
    </div>
    </div>
  `
})
export class SessionsPage {
  readonly sessions = inject(SessionsService);
  private readonly dialog = inject(AppDialogService);
  readonly totalCost = computed(() => this.sessions.sessions().reduce((sum, item) => sum + item.costo, 0));
  readonly finalizedCount = computed(() => this.sessions.sessions().filter((item) => item.estado === 'finalizada').length);

  detail(item: TattooSession) {
    this.dialog.open(EntityDetailDialogComponent, {
      ...buildResponsiveDialogConfig('500px'),
      data: {
        title: item.clienteNombre,
        subtitle: `${item.tatuadorNombre} · ${item.estado}`,
        image: item.fotos[0],
        rows: [
          { label: 'Duración', value: `${item.duracion} minutos` },
          { label: 'Progreso', value: `${item.progreso}%` },
          { label: 'Costo', value: `$${item.costo}` },
          { label: 'Materiales', value: item.materiales.join(', ') },
          { label: 'Notas', value: item.notas }
        ]
      }
    });
  }
}
