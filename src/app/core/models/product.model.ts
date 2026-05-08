import { BaseEntity } from './common.models';

export type ProductCategory = 'Chompas' | 'Pantalones' | 'Camisetas' | 'Gorras' | 'Accesorios';
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'Única';
export type ProductStatus = 'activo' | 'bajo_stock' | 'agotado' | 'descontinuado';

export interface Product extends BaseEntity {
  nombre: string;
  descripcion: string;
  categoria: ProductCategory;
  talla: ProductSize;
  color: string;
  stock: number;
  precio: number;
  images: string[];
  estado: ProductStatus;
}
