import { BaseEntity } from './common.models';

export type TattooStyle = 'Blackwork' | 'Traditional' | 'Realismo' | 'Fine Line' | 'Japanese' | 'Neo Traditional' | 'Lettering';
export type TattooDifficulty = 'Baja' | 'Media' | 'Alta' | 'Experto';

export interface TattooDesign extends BaseEntity {
  nombre: string;
  estilo: TattooStyle;
  tamano: string;
  dificultad: TattooDifficulty;
  precioEstimado: number;
  duracionEstimado: string;
  images: string[];
  artistaAsignado: string;
  descripcion: string;
}
