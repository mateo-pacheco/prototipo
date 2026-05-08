import { Injectable, computed, signal } from '@angular/core';
import { mockProducts } from '../data/mock-data';
import { Product, ProductStatus } from '../models/product.model';
import { createMemoryStore } from './memory-store.util';
import { uid } from '../utils/misc.util';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private readonly store = createMemoryStore<Product>(mockProducts);
  readonly products = this.store.list;

  readonly lowStockCount = computed(() => this.products().filter((item) => item.stock <= 6 && item.estado !== 'descontinuado').length);
  readonly totalCount = computed(() => this.products().length);
  readonly totalValue = computed(() => this.products().reduce((sum, item) => sum + item.precio * item.stock, 0));

  getById(id: string) {
    return this.products().find((item) => item.id === id) ?? null;
  }

  save(product: Partial<Product> & { id?: string }) {
    const timestamp = new Date().toISOString();
    const next: Product = {
      id: product.id ?? uid('prod'),
      nombre: product.nombre?.trim() || 'Producto sin nombre',
      descripcion: product.descripcion ?? '',
      categoria: product.categoria ?? 'Accesorios',
      talla: product.talla ?? 'Única',
      color: product.color ?? 'No definido',
      stock: Number(product.stock ?? 0),
      precio: Number(product.precio ?? 0),
      images: product.images?.length ? product.images : mockProducts[0].images,
      estado: (product.estado as ProductStatus) ?? this.resolveStatus(Number(product.stock ?? 0)),
      createdAt: product.id ? this.getById(product.id)?.createdAt ?? timestamp : timestamp,
      updatedAt: timestamp
    };
    this.store.upsert(next);
    return next;
  }

  remove(id: string) {
    this.store.remove(id);
  }

  resolveStatus(stock: number): ProductStatus {
    if (stock <= 0) {
      return 'agotado';
    }
    if (stock <= 6) {
      return 'bajo_stock';
    }
    return 'activo';
  }
}
