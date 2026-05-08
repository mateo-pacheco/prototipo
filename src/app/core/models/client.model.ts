import { BaseEntity } from './common.models';

export interface Client extends BaseEntity {
  nombre: string;
  telefono: string;
  email: string;
  historial: string;
  tatuajesRealizados: number;
  citas: number;
  observaciones: string;
}
