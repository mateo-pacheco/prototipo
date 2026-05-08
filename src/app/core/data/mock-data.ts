import { Appointment } from '../models/appointment.model';
import { Artist } from '../models/artist.model';
import { Client } from '../models/client.model';
import { Product } from '../models/product.model';
import { TattooDesign } from '../models/tattoo.model';
import { TattooSession } from '../models/session.model';
import { AppUser } from '../models/user.model';
import { StudioSettings } from '../models/settings.model';
import { svgDataUrl } from '../utils/misc.util';

const now = new Date();
const daysAgo = (days: number) => new Date(now.getTime() - days * 86400000).toISOString();
const daysAhead = (days: number) => new Date(now.getTime() + days * 86400000).toISOString();

export const mockUsers: AppUser[] = [
  {
    username: 'admin',
    password: 'admin123',
    name: 'Valeria Cárdenas',
    role: 'admin',
    title: 'Administradora del estudio',
    avatar: svgDataUrl('Admin', '#7c3aed', '#14b8a6'),
    permissions: ['all']
  },
  {
    username: 'tatuador',
    password: 'tattoo123',
    name: 'Mateo Rivas',
    role: 'tatuador',
    title: 'Tatuador senior',
    avatar: svgDataUrl('Tattoo', '#0ea5e9', '#22c55e'),
    permissions: ['dashboard', 'tattoos', 'clients', 'appointments', 'sessions', 'reports']
  },
  {
    username: 'recepcionista',
    password: 'frontdesk123',
    name: 'Lucía Vera',
    role: 'recepcionista',
    title: 'Recepción y agenda',
    avatar: svgDataUrl('Front Desk', '#f97316', '#ec4899'),
    permissions: ['dashboard', 'inventory', 'clients', 'appointments']
  }
];

export const mockSettings: StudioSettings = {
  studioName: 'InkStock Studio',
  tagline: 'Tatuajes premium y merchandising con control total de inventario',
  contactEmail: 'contacto@inkstock.studio',
  phone: '+593 99 123 4567',
  currency: 'USD',
  darkMode: true,
  compactDensity: false,
  accent: '#7c3aed'
};

export const mockProducts: Product[] = [
  {
    id: 'prod_hoodie_black',
    nombre: 'Chompa Eclipse',
    descripcion: 'Chompa heavyweight con bordado frontal minimalista.',
    categoria: 'Chompas',
    talla: 'M',
    color: 'Negro carbón',
    stock: 6,
    precio: 68,
    images: [svgDataUrl('Chompa Eclipse', '#111827', '#7c3aed')],
    estado: 'bajo_stock',
    createdAt: daysAgo(14),
    updatedAt: daysAgo(1)
  },
  {
    id: 'prod_pants_01',
    nombre: 'Pantalón Urban Cut',
    descripcion: 'Corte relajado con denim premium y costuras reforzadas.',
    categoria: 'Pantalones',
    talla: 'L',
    color: 'Azul oscuro',
    stock: 18,
    precio: 84,
    images: [svgDataUrl('Urban Cut', '#1d4ed8', '#14b8a6')],
    estado: 'activo',
    createdAt: daysAgo(24),
    updatedAt: daysAgo(3)
  },
  {
    id: 'prod_tshirt_01',
    nombre: 'Camiseta Needle Line',
    descripcion: 'Camiseta premium en algodón peinado con fit oversize.',
    categoria: 'Camisetas',
    talla: 'XL',
    color: 'Blanco humo',
    stock: 24,
    precio: 34,
    images: [svgDataUrl('Needle Line', '#f472b6', '#22d3ee')],
    estado: 'activo',
    createdAt: daysAgo(11),
    updatedAt: daysAgo(4)
  },
  {
    id: 'prod_hat_01',
    nombre: 'Gorra Atelier',
    descripcion: 'Gorra estructurada con patch bordado y cierre ajustable.',
    categoria: 'Gorras',
    talla: 'Única',
    color: 'Arena',
    stock: 11,
    precio: 24,
    images: [svgDataUrl('Atelier Hat', '#d97706', '#0ea5e9')],
    estado: 'activo',
    createdAt: daysAgo(8),
    updatedAt: daysAgo(2)
  },
  {
    id: 'prod_accessory_01',
    nombre: 'Kit de cuidado',
    descripcion: 'Pack de aftercare con ungüento, film y guía de cuidado.',
    categoria: 'Accesorios',
    talla: 'Única',
    color: 'Gris humo',
    stock: 4,
    precio: 18,
    images: [svgDataUrl('Aftercare Kit', '#22c55e', '#0f172a')],
    estado: 'bajo_stock',
    createdAt: daysAgo(6),
    updatedAt: daysAgo(1)
  }
];

export const mockTattooDesigns: TattooDesign[] = [
  {
    id: 'tat_01',
    nombre: 'Serpiente Lunar',
    estilo: 'Fine Line',
    tamano: '12 cm',
    dificultad: 'Media',
    precioEstimado: 120,
    duracionEstimado: '2h 30m',
    images: [svgDataUrl('Serpiente Lunar', '#8b5cf6', '#22c55e')],
    artistaAsignado: 'Mateo Rivas',
    descripcion: 'Diseño elegante con curvas suaves, ideal para antebrazo o pantorrilla.',
    createdAt: daysAgo(15),
    updatedAt: daysAgo(2)
  },
  {
    id: 'tat_02',
    nombre: 'Calavera Floral',
    estilo: 'Blackwork',
    tamano: '18 cm',
    dificultad: 'Alta',
    precioEstimado: 220,
    duracionEstimado: '4h',
    images: [svgDataUrl('Calavera Floral', '#111827', '#f59e0b')],
    artistaAsignado: 'Valeria Cárdenas',
    descripcion: 'Composición potente con alto contraste, ideal para brazo o muslo.',
    createdAt: daysAgo(22),
    updatedAt: daysAgo(3)
  },
  {
    id: 'tat_03',
    nombre: 'Ojo Cósmico',
    estilo: 'Realismo',
    tamano: '10 cm',
    dificultad: 'Experto',
    precioEstimado: 180,
    duracionEstimado: '3h',
    images: [svgDataUrl('Ojo Cósmico', '#0ea5e9', '#f97316')],
    artistaAsignado: 'Mateo Rivas',
    descripcion: 'Realismo surreal con detalles de luz y textura.',
    createdAt: daysAgo(9),
    updatedAt: daysAgo(1)
  }
];

export const mockArtists: Artist[] = [
  {
    id: 'artist_01',
    nombre: 'Mateo Rivas',
    especialidad: 'Fine Line y Realismo',
    experiencia: 8,
    disponibilidad: 'Disponible',
    redesSociales: ['@mateoink', '@studio.mateo'],
    portfolio: [svgDataUrl('Portfolio Mateo', '#0ea5e9', '#22c55e')],
    rating: 4.9,
    bio: 'Especialista en trazos precisos, retratos y composición limpia.',
    createdAt: daysAgo(140),
    updatedAt: daysAgo(2)
  },
  {
    id: 'artist_02',
    nombre: 'Valeria Cárdenas',
    especialidad: 'Blackwork y Traditional',
    experiencia: 11,
    disponibilidad: 'Ocupado',
    redesSociales: ['@valeria.studio'],
    portfolio: [svgDataUrl('Portfolio Valeria', '#7c3aed', '#f97316')],
    rating: 4.8,
    bio: 'Composiciones sólidas, alto contraste y narrativa visual fuerte.',
    createdAt: daysAgo(210),
    updatedAt: daysAgo(1)
  },
  {
    id: 'artist_03',
    nombre: 'Camila Torres',
    especialidad: 'Lettering y Neo Traditional',
    experiencia: 6,
    disponibilidad: 'Disponible',
    redesSociales: ['@cami.lines', '@ink.by.cami'],
    portfolio: [svgDataUrl('Portfolio Camila', '#ec4899', '#22d3ee')],
    rating: 4.7,
    bio: 'Diseños expresivos y lettering con composición editorial.',
    createdAt: daysAgo(95),
    updatedAt: daysAgo(4)
  }
];

export const mockClients: Client[] = [
  {
    id: 'client_01',
    nombre: 'Andrea Páez',
    telefono: '+593 98 765 4321',
    email: 'andrea@email.com',
    historial: 'Dos sesiones completadas, una consulta abierta.',
    tatuajesRealizados: 2,
    citas: 3,
    observaciones: 'Prefiere citas nocturnas y diseños minimalistas.',
    createdAt: daysAgo(32),
    updatedAt: daysAgo(2)
  },
  {
    id: 'client_02',
    nombre: 'Carlos Jaramillo',
    telefono: '+593 97 222 9988',
    email: 'carlos@email.com',
    historial: 'Cliente frecuente, interesado en manga completa.',
    tatuajesRealizados: 4,
    citas: 6,
    observaciones: 'Solicita presupuestos con anticipación.',
    createdAt: daysAgo(44),
    updatedAt: daysAgo(1)
  },
  {
    id: 'client_03',
    nombre: 'Sofía Molina',
    telefono: '+593 99 456 7000',
    email: 'sofia@email.com',
    historial: 'Primera sesión finalizada hace 2 semanas.',
    tatuajesRealizados: 1,
    citas: 2,
    observaciones: 'Alergia leve: confirmar tintas y cuidados.',
    createdAt: daysAgo(19),
    updatedAt: daysAgo(5)
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 'appt_01',
    clienteId: 'client_01',
    clienteNombre: 'Andrea Páez',
    tatuadorId: 'artist_01',
    tatuadorNombre: 'Mateo Rivas',
    disenoId: 'tat_01',
    disenoNombre: 'Serpiente Lunar',
    fecha: daysAhead(1).slice(0, 10),
    hora: '11:30',
    estado: 'confirmada',
    notas: 'Enviar recordatorio y confirmar diseño final.',
    createdAt: daysAgo(2),
    updatedAt: daysAgo(1)
  },
  {
    id: 'appt_02',
    clienteId: 'client_02',
    clienteNombre: 'Carlos Jaramillo',
    tatuadorId: 'artist_02',
    tatuadorNombre: 'Valeria Cárdenas',
    disenoId: 'tat_02',
    disenoNombre: 'Calavera Floral',
    fecha: daysAhead(0).slice(0, 10),
    hora: '16:00',
    estado: 'pendiente',
    notas: 'Presupuesto aprobado, falta anticipo.',
    createdAt: daysAgo(4),
    updatedAt: daysAgo(1)
  },
  {
    id: 'appt_03',
    clienteId: 'client_03',
    clienteNombre: 'Sofía Molina',
    tatuadorId: 'artist_03',
    tatuadorNombre: 'Camila Torres',
    disenoId: 'tat_03',
    disenoNombre: 'Ojo Cósmico',
    fecha: daysAhead(3).slice(0, 10),
    hora: '13:15',
    estado: 'finalizada',
    notas: 'Sesión cerrada, enviar seguimiento de curación.',
    createdAt: daysAgo(7),
    updatedAt: daysAgo(1)
  }
];

export const mockSessions: TattooSession[] = [
  {
    id: 'sess_01',
    clienteId: 'client_01',
    clienteNombre: 'Andrea Páez',
    tatuadorId: 'artist_01',
    tatuadorNombre: 'Mateo Rivas',
    duracion: 150,
    progreso: 78,
    notas: 'Bloque principal aplicado. Falta sombreado final.',
    fotos: [svgDataUrl('Sesión Andrea', '#14b8a6', '#7c3aed')],
    materiales: ['Cartucho 7RL', 'Tintas negro/gris', 'Stencil'],
    costo: 160,
    estado: 'activa',
    createdAt: daysAgo(1),
    updatedAt: daysAgo(0)
  },
  {
    id: 'sess_02',
    clienteId: 'client_02',
    clienteNombre: 'Carlos Jaramillo',
    tatuadorId: 'artist_02',
    tatuadorNombre: 'Valeria Cárdenas',
    duracion: 240,
    progreso: 100,
    notas: 'Finalizada. Entregar aftercare.',
    fotos: [svgDataUrl('Sesión Carlos', '#f97316', '#0ea5e9')],
    materiales: ['Cartucho 9M', 'Tinta blackwork', 'Vaselina'],
    costo: 220,
    estado: 'finalizada',
    createdAt: daysAgo(3),
    updatedAt: daysAgo(1)
  }
];

export const dashboardTargets = {
  appointmentsToday: 2,
  pendingSessions: 4,
  lowStock: 2,
  revenue: 14890
};
