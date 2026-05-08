import { BaseEntity } from './common.models';

export type AppointmentStatus = 'pendiente' | 'confirmada' | 'cancelada' | 'finalizada';

export interface Appointment extends BaseEntity {
  clienteId: string;
  clienteNombre: string;
  tatuadorId: string;
  tatuadorNombre: string;
  disenoId: string;
  disenoNombre: string;
  fecha: string;
  hora: string;
  estado: AppointmentStatus;
  notas: string;
}
