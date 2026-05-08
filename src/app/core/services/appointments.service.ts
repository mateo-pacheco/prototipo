import { Injectable, computed } from '@angular/core';
import { mockAppointments } from '../data/mock-data';
import { Appointment, AppointmentStatus } from '../models/appointment.model';
import { createMemoryStore } from './memory-store.util';
import { uid } from '../utils/misc.util';

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  private readonly store = createMemoryStore<Appointment>(mockAppointments);
  readonly appointments = this.store.list;
  readonly todaysAppointments = computed(() => this.appointments().filter((item) => item.fecha === new Date().toISOString().slice(0, 10)));
  readonly pendingCount = computed(() => this.appointments().filter((item) => item.estado === 'pendiente').length);

  getById(id: string) {
    return this.appointments().find((item) => item.id === id) ?? null;
  }

  save(appointment: Partial<Appointment> & { id?: string }) {
    const timestamp = new Date().toISOString();
    const next: Appointment = {
      id: appointment.id ?? uid('appt'),
      clienteId: appointment.clienteId ?? '',
      clienteNombre: appointment.clienteNombre ?? 'Sin cliente',
      tatuadorId: appointment.tatuadorId ?? '',
      tatuadorNombre: appointment.tatuadorNombre ?? 'Sin tatuador',
      disenoId: appointment.disenoId ?? '',
      disenoNombre: appointment.disenoNombre ?? 'Sin diseño',
      fecha: appointment.fecha ?? new Date().toISOString().slice(0, 10),
      hora: appointment.hora ?? '09:00',
      estado: (appointment.estado as AppointmentStatus) ?? 'pendiente',
      notas: appointment.notas ?? '',
      createdAt: appointment.id ? this.getById(appointment.id)?.createdAt ?? timestamp : timestamp,
      updatedAt: timestamp
    };
    this.store.upsert(next);
    return next;
  }

  remove(id: string) {
    this.store.remove(id);
  }
}
