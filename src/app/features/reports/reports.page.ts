import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InventoryService } from '../../core/services/inventory.service';
import { TattooService } from '../../core/services/tattoo.service';
import { AppointmentsService } from '../../core/services/appointments.service';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { formatMoney } from '../../core/utils/misc.util';

@Component({
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Reportes" subtitle="Panel ejecutivo con métricas, tendencias y lectura rápida."></app-page-header>

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <app-stat-card icon="trending_up" label="Ventas simuladas" [value]="formatMoney(revenue())" description="Acumulado del período" />
      <app-stat-card icon="event" label="Citas" [value]="appointments.appointments().length" description="Distribución mensual" badgeBackground="linear-gradient(135deg, #0ea5e9, #7c3aed)" />
      <app-stat-card icon="brush" label="Diseños" [value]="tattoos.tattoos().length" description="Catálogo solicitado" badgeBackground="linear-gradient(135deg, #14b8a6, #22c55e)" />
      <app-stat-card icon="warning" label="Stock bajo" [value]="inventory.lowStockCount()" description="Acción prioritaria" badgeBackground="linear-gradient(135deg, #f59e0b, #ef4444)" />
    </section>

      <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-slate-500">Rendimiento</p>
            <h3 class="mt-2 text-2xl font-semibold text-white">Ingresos y demanda</h3>
          </div>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Q1</span>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
            <p class="text-sm text-slate-500">Ingresos por línea</p>
            <div class="mt-4 space-y-4">
              <div *ngFor="let item of revenueSeries()" class="space-y-2">
                <div class="flex items-center justify-between text-sm text-white">
                  <span>{{ item.label }}</span>
                  <span>{{ formatMoney(item.value) }}</span>
                </div>
                <div class="h-2 overflow-hidden rounded-full bg-white/10">
                  <div class="h-full rounded-full bg-gradient-to-r from-violet-500 to-teal-400" [style.width.%]="item.percent"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
            <p class="text-sm text-slate-500">Citas por mes</p>
            <div class="mt-4 space-y-4">
              <div *ngFor="let item of bookingSeries()" class="space-y-2">
                <div class="flex items-center justify-between text-sm text-white">
                  <span>{{ item.label }}</span>
                  <span>{{ item.value }}</span>
                </div>
                <div class="h-2 overflow-hidden rounded-full bg-white/10">
                  <div class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" [style.width.%]="item.percent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold text-white">Top solicitados</h3>
          <div class="mt-5 space-y-3">
            <div *ngFor="let item of topRequested()" class="rounded-[1.4rem] border border-white/10 bg-slate-950/40 p-4">
              <div class="flex items-center justify-between">
                <span class="font-medium text-white">{{ item.label }}</span>
                <span class="text-sm text-slate-500">{{ item.value }}</span>
              </div>
              <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div class="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-teal-400" [style.width.%]="item.percent"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h3 class="text-lg font-semibold text-white">Lectura ejecutiva</h3>
          <p class="mt-3 text-sm leading-6 text-slate-400">
            El propósito de esta vista es comunicar rápidamente salud operativa, demanda de diseños y presión de inventario.
          </p>
        </div>
      </div>
    </div>
    </div>
  `
})
export class ReportsPage {
  readonly inventory = inject(InventoryService);
  readonly tattoos = inject(TattooService);
  readonly appointments = inject(AppointmentsService);
  readonly formatMoney = formatMoney;

  readonly revenue = computed(() => this.inventory.totalValue() * 0.42 + this.appointments.appointments().length * 80);
  readonly revenueSeries = computed(() => {
    const base = this.revenue();
    return [
      { label: 'Tatuajes', value: base * 0.58, percent: 92 },
      { label: 'Ropa', value: base * 0.31, percent: 64 },
      { label: 'Accesorios', value: base * 0.11, percent: 28 }
    ];
  });
  readonly bookingSeries = computed(() => [
    { label: 'Enero', value: 18, percent: 42 },
    { label: 'Febrero', value: 22, percent: 66 },
    { label: 'Marzo', value: 27, percent: 85 },
    { label: 'Abril', value: 25, percent: 75 }
  ]);
  readonly topRequested = computed(() =>
    this.tattoos.tattoos().map((item, index) => ({
      label: item.nombre,
      value: item.estilo,
      percent: Math.max(30, 95 - index * 18)
    }))
  );
}
