import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventoryService } from '../../core/services/inventory.service';
import { Product, ProductStatus } from '../../core/models/product.model';
import { formatDateTime, formatMoney } from '../../core/utils/misc.util';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { StatCardComponent } from '../../shared/ui/stat-card.component';
import { EmptyStateComponent } from '../../shared/ui/empty-state.component';
import { ConfirmDialogComponent } from '../../shared/ui/confirm-dialog.component';
import { EntityDetailDialogComponent } from '../../shared/ui/entity-detail.dialog';
import { EntityFormDialogComponent } from '../../shared/ui/entity-form.dialog';
import { buildResponsiveDialogConfig } from '../../shared/ui/dialog-config';
import { AppDialogService } from '../../shared/ui/app-dialog.service';

@Component({
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, StatCardComponent, EmptyStateComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="space-y-6">
    <app-page-header title="Inventario de ropa" subtitle="Catálogo, stock y control de productos para el estudio.">
      <button
        actions
        type="button"
        class="inline-flex h-11 items-center gap-2 rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400"
        (click)="openForm()"
      >
        <i class="fa-solid fa-plus"></i>
        Nuevo producto
      </button>
    </app-page-header>

    <section class="grid gap-4 md:grid-cols-3">
      <app-stat-card icon="fa-solid fa-box" label="Productos" [value]="inventory.totalCount()" description="Catálogo total" />
      <app-stat-card icon="fa-solid fa-triangle-exclamation" label="Stock bajo" [value]="inventory.lowStockCount()" description="Revisar reposición" badgeBackground="linear-gradient(135deg, #f59e0b, #ef4444)" />
      <app-stat-card icon="fa-solid fa-money-bill-wave" label="Valor inventario" [value]="formatMoney(inventory.totalValue())" description="Stock valorizado" badgeBackground="linear-gradient(135deg, #14b8a6, #0ea5e9)" />
    </section>

    <div class="rounded-[2rem] border border-white/10 bg-white/5 p-6">
      <div class="grid gap-4 xl:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Buscar</span>
          <input
            [value]="query()"
            (input)="query.set(($any($event.target)).value)"
            placeholder="Producto, color, talla..."
            class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
          />
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Categoría</span>
          <select [value]="category()" (change)="category.set(($any($event.target)).value)" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10">
            <option value="" class="bg-slate-950">Todas</option>
            <option value="Chompas" class="bg-slate-950">Chompas</option>
            <option value="Pantalones" class="bg-slate-950">Pantalones</option>
            <option value="Camisetas" class="bg-slate-950">Camisetas</option>
            <option value="Gorras" class="bg-slate-950">Gorras</option>
            <option value="Accesorios" class="bg-slate-950">Accesorios</option>
          </select>
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-medium text-slate-200">Estado</span>
          <select [value]="status()" (change)="status.set(($any($event.target)).value)" class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10">
            <option value="" class="bg-slate-950">Todos</option>
            <option value="activo" class="bg-slate-950">Activo</option>
            <option value="bajo_stock" class="bg-slate-950">Stock bajo</option>
            <option value="agotado" class="bg-slate-950">Agotado</option>
            <option value="descontinuado" class="bg-slate-950">Descontinuado</option>
          </select>
        </label>
      </div>

      <div class="mt-6 overflow-hidden rounded-[1.6rem] border border-white/10">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-white/10">
            <thead class="bg-slate-950/60 text-left text-xs uppercase tracking-[0.24em] text-slate-500">
              <tr>
                <th class="px-4 py-3">Producto</th>
                <th class="px-4 py-3">Categoría</th>
                <th class="px-4 py-3">Stock</th>
                <th class="px-4 py-3">Precio</th>
                <th class="px-4 py-3">Estado</th>
                <th class="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/8 bg-slate-950/30">
              <tr *ngFor="let row of filtered()" class="align-top">
                <td class="px-4 py-4">
                  <div class="flex items-center gap-3">
                    <img [src]="row.images[0]" alt="" class="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/10" />
                    <div class="min-w-0">
                      <p class="font-medium text-white">{{ row.nombre }}</p>
                      <p class="text-sm text-slate-500">{{ row.descripcion }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm text-slate-300">{{ row.categoria }}</td>
                <td class="px-4 py-4 text-sm font-semibold" [class.text-amber-300]="row.stock <= 6" [class.text-emerald-300]="row.stock > 6">{{ row.stock }}</td>
                <td class="px-4 py-4 text-sm text-slate-300">{{ formatMoney(row.precio) }}</td>
                <td class="px-4 py-4">
                  <span
                    class="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                    [ngClass]="{
                      'bg-emerald-500/15 text-emerald-300': row.estado === 'activo',
                      'bg-amber-500/15 text-amber-300': row.estado === 'bajo_stock',
                      'bg-red-500/15 text-red-300': row.estado === 'agotado',
                      'bg-slate-500/15 text-slate-300': row.estado === 'descontinuado'
                    }"
                  >
                    {{ row.estado }}
                  </span>
                </td>
                <td class="px-4 py-4">
                  <div class="flex justify-end gap-2">
                    <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10" (click)="detail(row)"><i class="fa-solid fa-eye text-lg"></i></button>
                    <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10" (click)="openForm(row)"><i class="fa-solid fa-pen text-lg"></i></button>
                    <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-300 transition hover:bg-red-500/10" (click)="remove(row)"><i class="fa-solid fa-trash text-lg"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div *ngIf="filtered().length === 0" class="mt-6">
          <app-empty-state icon="fa-solid fa-box" title="Sin productos" message="Prueba otro filtro o crea un nuevo producto."></app-empty-state>
        </div>
      </div>
    </div>
    </div>
  `
})
export class InventoryPage {
  readonly inventory = inject(InventoryService);
  private readonly dialog = inject(AppDialogService);
  private readonly snack = inject(MatSnackBar);

  readonly query = signal('');
  readonly category = signal('');
  readonly status = signal('');
  readonly formatMoney = formatMoney;

  readonly filtered = computed(() =>
    this.inventory.products().filter((item) => {
      const q = this.query().toLowerCase();
      const matchesQuery = !q || `${item.nombre} ${item.descripcion} ${item.color} ${item.talla}`.toLowerCase().includes(q);
      const matchesCategory = !this.category() || item.categoria === this.category();
      const matchesStatus = !this.status() || item.estado === this.status();
      return matchesQuery && matchesCategory && matchesStatus;
    })
  );

  openForm(product?: Product) {
    const ref = this.dialog.open(EntityFormDialogComponent, {
      ...buildResponsiveDialogConfig('760px'),
      data: {
        title: product ? 'Editar producto' : 'Nuevo producto',
        subtitle: 'Mantén el catálogo ordenado y visualmente consistente.',
        value: product ?? undefined,
        fields: [
          { key: 'nombre', label: 'Nombre', type: 'text', required: true },
          { key: 'descripcion', label: 'Descripción', type: 'textarea', required: true },
          { key: 'categoria', label: 'Categoría', type: 'select', required: true, options: ['Chompas', 'Pantalones', 'Camisetas', 'Gorras', 'Accesorios'].map((value) => ({ label: value, value })) },
          { key: 'talla', label: 'Talla', type: 'select', required: true, options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Única'].map((value) => ({ label: value, value })) },
          { key: 'color', label: 'Color', type: 'text', required: true },
          { key: 'stock', label: 'Stock', type: 'number', required: true },
          { key: 'precio', label: 'Precio', type: 'number', required: true },
          { key: 'estado', label: 'Estado', type: 'select', required: true, options: ['activo', 'bajo_stock', 'agotado', 'descontinuado'].map((value) => ({ label: value, value })) }
        ]
      }
    });

    ref.afterClosed().subscribe((value) => {
      if (!value) return;
      this.inventory.save({ ...product, ...value, images: product?.images ?? [] });
      this.snack.open(product ? 'Producto actualizado' : 'Producto creado', 'Cerrar');
    });
  }

  detail(product: Product) {
    this.dialog.open(EntityDetailDialogComponent, {
      ...buildResponsiveDialogConfig('760px'),
      data: {
        title: product.nombre,
        subtitle: product.categoria,
        image: product.images[0],
        rows: [
          { label: 'Descripción', value: product.descripcion },
          { label: 'Talla', value: product.talla },
          { label: 'Color', value: product.color },
          { label: 'Stock', value: product.stock },
          { label: 'Precio', value: formatMoney(product.precio) },
          { label: 'Estado', value: product.estado },
          { label: 'Creado', value: formatDateTime(product.createdAt) }
        ]
      }
    });
  }

  remove(product: Product) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      ...buildResponsiveDialogConfig('460px'),
      data: {
        title: 'Eliminar producto',
        message: `¿Deseas eliminar ${product.nombre}?`,
        confirmLabel: 'Eliminar',
        tone: 'danger'
      }
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (!confirmed) return;
      this.inventory.remove(product.id);
      this.snack.open('Producto eliminado', 'Cerrar');
    });
  }
}
