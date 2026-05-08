import { BaseEntity } from './common.models';

export interface TattooSession extends BaseEntity {
  clienteId: string;
  clienteNombre: string;
  tatuadorId: string;
  tatuadorNombre: string;
  duracion: number;
  progreso: number;
  notas: string;
  fotos: string[];
  materiales: string[];
  costo: number;
  estado: 'activa' | 'en_pausa' | 'finalizada';
}
