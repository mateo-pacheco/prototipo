export type UserRole = 'admin' | 'tatuador' | 'recepcionista';

export interface AppUser {
  username: string;
  password: string;
  name: string;
  role: UserRole;
  title: string;
  avatar: string;
  permissions: string[];
}
