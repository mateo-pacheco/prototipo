import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { GlobalSearchComponent } from '../../shared/ui/global-search.component';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  scope: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, GlobalSearchComponent, ...MATERIAL_IMPORTS],
  host: { class: 'block w-full' },
  template: `
    <div class="min-h-screen bg-slate-950 text-white">
      <div class="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.14),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.12),_transparent_22%),linear-gradient(180deg,_#08111f_0%,_#050b14_100%)]"></div>

      <aside class="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-slate-950/80 backdrop-blur-xl xl:flex xl:flex-col">
        <div class="flex h-full flex-col p-5">
          <div class="flex items-center gap-3 border-b border-white/10 pb-5">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-teal-400 text-sm font-black shadow-lg shadow-violet-950/40">
              IS
            </div>
            <div>
              <p class="text-sm font-semibold">InkStock Studio</p>
              <p class="text-xs text-slate-500">Panel operativo</p>
            </div>
          </div>

          <div class="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <img [src]="auth.user()?.avatar" alt="" class="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10" />
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-white">{{ auth.user()?.name }}</p>
              <p class="truncate text-xs text-slate-500 capitalize">{{ auth.user()?.role }} · {{ auth.user()?.title }}</p>
            </div>
          </div>

          <nav class="mt-6 flex-1 space-y-1 overflow-y-auto pr-1">
            <a
              *ngFor="let item of navItems()"
              [routerLink]="item.route"
              routerLinkActive="bg-white/10 text-white border-white/10"
              class="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm text-slate-400 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
            >
              <mat-icon class="!text-xl">{{ item.icon }}</mat-icon>
              <span>{{ item.label }}</span>
            </a>
          </nav>

          <div class="border-t border-white/10 pt-4">
            <button
              type="button"
              (click)="logout()"
              class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-200"
            >
              <mat-icon class="!text-xl">logout</mat-icon>
              <span>Salir</span>
            </button>
          </div>
        </div>
      </aside>

      <div class="xl:pl-72">
        <header class="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div class="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
            <div class="flex items-center gap-3">
              <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 xl:hidden" (click)="mobileMenu.set(true)">
                <mat-icon>menu</mat-icon>
              </button>
              <div class="min-w-0">
                <h1 class="truncate text-lg font-semibold text-white md:text-xl">{{ headerTitle() }}</h1>
                <p class="truncate text-xs capitalize text-slate-500">{{ auth.user()?.role }} · {{ auth.user()?.title }}</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="hidden w-72 lg:block">
                <app-global-search></app-global-search>
              </div>
              <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white" (click)="theme.toggle()">
                <mat-icon>{{ theme.isDark() ? 'dark_mode' : 'light_mode' }}</mat-icon>
              </button>
              <button type="button" class="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-200" (click)="logout()">
                <mat-icon>logout</mat-icon>
                <span class="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>
        </header>

        <main class="px-4 py-6 md:px-6 md:py-8">
          <div class="mx-auto max-w-7xl space-y-6">
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>

      <div *ngIf="mobileMenu()" class="fixed inset-0 z-50 xl:hidden">
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" (click)="mobileMenu.set(false)"></div>
        <aside class="absolute left-0 top-0 h-full w-80 border-r border-white/10 bg-slate-950 p-5">
          <div class="flex items-center justify-between border-b border-white/10 pb-5">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-teal-400 text-sm font-black">
                IS
              </div>
              <div>
                <p class="text-sm font-semibold">InkStock Studio</p>
                <p class="text-xs text-slate-500">Menú</p>
              </div>
            </div>
            <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5" (click)="mobileMenu.set(false)">
              <mat-icon>close</mat-icon>
            </button>
          </div>

          <div class="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <img [src]="auth.user()?.avatar" alt="" class="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10" />
            <div class="min-w-0">
              <p class="truncate text-sm font-medium">{{ auth.user()?.name }}</p>
              <p class="truncate text-xs text-slate-500 capitalize">{{ auth.user()?.role }}</p>
            </div>
          </div>

          <nav class="mt-5 space-y-1">
            <a
              *ngFor="let item of navItems()"
              [routerLink]="item.route"
              routerLinkActive="bg-white/10 text-white border-white/10"
              class="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              (click)="mobileMenu.set(false)"
            >
              <mat-icon class="!text-xl">{{ item.icon }}</mat-icon>
              <span>{{ item.label }}</span>
            </a>
          </nav>
        </aside>
      </div>
    </div>
  `
})
export class ShellComponent {
  private readonly router = inject(Router);
  readonly auth = inject(AuthService);
  readonly theme = inject(ThemeService);
  readonly mobileMenu = signal(false);
  readonly currentUrl = signal(this.router.url);

  readonly navItems = computed<NavItem[]>(() => {
    const items: NavItem[] = [
      { label: 'Dashboard', icon: 'space_dashboard', route: '/dashboard', scope: 'dashboard' },
      { label: 'Inventario', icon: 'inventory_2', route: '/inventory/products', scope: 'inventory' },
      { label: 'Tatuajes', icon: 'brush', route: '/tattoos', scope: 'tattoos' },
      { label: 'Tatuadores', icon: 'groups', route: '/artists', scope: 'artists' },
      { label: 'Clientes', icon: 'people', route: '/clients', scope: 'clients' },
      { label: 'Citas', icon: 'event', route: '/appointments', scope: 'appointments' },
      { label: 'Sesiones', icon: 'monitor_heart', route: '/sessions', scope: 'sessions' },
      { label: 'Reportes', icon: 'bar_chart', route: '/reports', scope: 'reports' },
      { label: 'Configuración', icon: 'tune', route: '/settings', scope: 'settings' }
    ];
    return items.filter((item) => this.auth.canAccess([item.scope]));
  });

  readonly headerTitle = computed(() => {
    const map: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/inventory/products': 'Inventario',
      '/tattoos': 'Tatuajes',
      '/artists': 'Tatuadores',
      '/clients': 'Clientes',
      '/appointments': 'Citas',
      '/sessions': 'Sesiones',
      '/reports': 'Reportes',
      '/settings': 'Configuración'
    };
    const url = this.currentUrl().split('?')[0];
    return map[url] ?? 'InkStock Studio';
  });

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      this.currentUrl.set(this.router.url);
      this.mobileMenu.set(false);
    });
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1280) {
      this.mobileMenu.set(false);
    }
  }

  logout() {
    this.auth.logout();
    void this.router.navigateByUrl('/auth/login');
  }
}
