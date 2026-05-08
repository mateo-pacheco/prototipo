import { Injectable, computed, signal } from '@angular/core';
import { mockUsers } from '../data/mock-data';
import { AppUser, UserRole } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly users = signal(mockUsers);
  private readonly current = signal<AppUser | null>(null);

  readonly user = computed(() => this.current());
  readonly loggedIn = computed(() => !!this.current());
  readonly role = computed(() => this.current()?.role ?? null);
  readonly permissions = computed(() => this.current()?.permissions ?? []);

  login(username: string, password: string): boolean {
    const user = this.users().find((candidate) => candidate.username === username && candidate.password === password) ?? null;
    this.current.set(user);
    return !!user;
  }

  logout() {
    this.current.set(null);
  }

  hasPermission(scope: string): boolean {
    const permissions = this.permissions();
    return permissions.includes('all') || permissions.includes(scope);
  }

  canAccess(scopes?: string[] | null): boolean {
    if (!scopes || scopes.length === 0) {
      return true;
    }
    return scopes.some((scope) => this.hasPermission(scope));
  }

  seedRole(role: UserRole) {
    const user = this.users().find((candidate) => candidate.role === role) ?? null;
    this.current.set(user);
  }
}
