import { BaseEntity } from './common.models';

export type Availability = 'Disponible' | 'Ocupado' | 'Vacaciones';

export interface Artist extends BaseEntity {
  nombre: string;
  especialidad: string;
  experiencia: number;
  disponibilidad: Availability;
  redesSociales: string[];
  portfolio: string[];
  rating: number;
  bio: string;
}
