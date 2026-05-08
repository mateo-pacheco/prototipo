import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppointmentsService } from '../../core/services/appointments.service';
import { ClientsService } from '../../core/services/clients.service';
import { InventoryService } from '../../core/services/inventory.service';
import { SessionsService } from '../../core/services/sessions.service';
import { formatMoney } from '../../core/utils/misc.util';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
        <p class="text-sm text-slate-400">Productos</p>
        <div class="mt-3 flex items-end justify-between">
          <p class="text-3xl font-semibold text-white">{{ inventory.totalCount() }}</p>
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-violet-500/20 text-violet-300">
            <i class="fa-solid fa-box text-xl"></i>
          </span>
        </div>
        <p class="mt-2 text-xs text-slate-500">En inventario</p>
      </div>

      <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
        <p class="text-sm text-slate-400">Stock bajo</p>
        <div class="mt-3 flex items-end justify-between">
          <p class="text-3xl font-semibold text-white">{{ inventory.lowStockCount() }}</p>
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-amber-500/20 text-amber-300">
            <i class="fa-solid fa-triangle-exclamation text-xl"></i>
          </span>
        </div>
        <p class="mt-2 text-xs text-slate-500">Requiere reposición</p>
      </div>

      <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
        <p class="text-sm text-slate-400">Citas hoy</p>
        <div class="mt-3 flex items-end justify-between">
          <p class="text-3xl font-semibold text-white">{{ appointments.todaysAppointments().length }}</p>
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/20 text-blue-300">
            <i class="fa-solid fa-calendar text-xl"></i>
          </span>
        </div>
        <p class="mt-2 text-xs text-slate-500">Agenda del día</p>
      </div>

      <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
        <p class="text-sm text-slate-400">Ingresos</p>
        <div class="mt-3 flex items-end justify-between">
          <p class="text-3xl font-semibold text-white">{{ formatMoney(revenue()) }}</p>
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-300">
            <i class="fa-solid fa-money-bill-wave text-xl"></i>
          </span>
        </div>
        <p class="mt-2 text-xs text-slate-500">Estimado mensual</p>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <a routerLink="/appointments" class="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
        <i class="fa-solid fa-plus"></i>
        Nueva cita
      </a>
      <a routerLink="/inventory/products" class="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
        <i class="fa-solid fa-box"></i>
        Ir a inventario
      </a>
    </section>

    <div class="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
      <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-slate-500">Agenda</p>
            <h2 class="mt-2 text-2xl font-semibold text-white">Próximas citas</h2>
          </div>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{{ upcoming().length }} pendientes</span>
        </div>

        <div class="mt-5 space-y-3">
          <div *ngFor="let item of upcoming()" class="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-4">
            <div class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-teal-400/20 text-violet-300">
              <i class="fa-solid fa-calendar text-xl"></i>
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate font-medium text-white">{{ item.clienteNombre }}</p>
              <p class="truncate text-sm text-slate-400">{{ item.disenoNombre }} · {{ item.tatuadorNombre }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-white">{{ item.fecha }}</p>
              <p class="text-xs text-slate-500">{{ item.hora }}</p>
            </div>
          </div>

          <div *ngIf="upcoming().length === 0" class="rounded-[1.4rem] border border-dashed border-white/10 bg-slate-950/40 p-8 text-center text-slate-500">
            <i class="fa-regular fa-calendar-xmark text-4xl mb-2"></i>
            <p>No hay citas programadas</p>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold text-white">Actividad reciente</h3>
          <div class="mt-4 space-y-3">
            <div *ngFor="let item of activity()" class="flex items-center gap-3">
              <div class="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-teal-400 text-white">
                <i [class]="item.icon + ' text-base'"></i>
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm text-white">{{ item.title }}</p>
                <p class="truncate text-xs text-slate-500">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold text-white">Clientes frecuentes</h3>
          <div class="mt-4 space-y-3">
            <div *ngFor="let client of frequentClients()" class="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-3">
              <div>
                <p class="text-sm font-medium text-white">{{ client.nombre }}</p>
                <p class="text-xs text-slate-500">{{ client.tatuajesRealizados }} tatuajes</p>
              </div>
              <span class="rounded-xl bg-violet-500/20 px-2 py-1 text-xs text-violet-300">{{ client.citas }} citas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `
})
export class DashboardPage {
  readonly inventory = inject(InventoryService);
  readonly appointments = inject(AppointmentsService);
  readonly sessions = inject(SessionsService);
  readonly clients = inject(ClientsService);
  readonly formatMoney = formatMoney;

  readonly revenue = computed(() => this.inventory.totalValue() * 0.34 + this.sessions.activeCount() * 140 + this.appointments.pendingCount() * 55);
  readonly upcoming = computed(() =>
    [...this.appointments.appointments()]
      .sort((a, b) => `${a.fecha} ${a.hora}`.localeCompare(`${b.fecha} ${b.hora}`))
      .slice(0, 5)
  );
  readonly activity = computed(() => [
    { icon: 'fa-solid fa-bag-shopping', title: 'Venta registrada', subtitle: 'Chompa Eclipse' },
    { icon: 'fa-solid fa-paintbrush', title: 'Diseño aprobado', subtitle: 'Serpiente Lunar' },
    { icon: 'fa-solid fa-calendar-check', title: 'Cita confirmada', subtitle: 'Andrea Páez' },
    { icon: 'fa-solid fa-boxes-stacked', title: 'Stock actualizado', subtitle: 'Accesorios' }
  ]);
  readonly frequentClients = computed(() => [...this.clients.clients()].sort((a, b) => b.citas - a.citas).slice(0, 3));
}
