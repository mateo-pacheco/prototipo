import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { GlobalSearchComponent } from '../../shared/ui/global-search.component';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  scope: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, GlobalSearchComponent],
  host: { class: 'block w-full' },
  template: `
    <div class="min-h-screen bg-slate-950 text-white relative">
      <div class="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.14),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.12),_transparent_22%),linear-gradient(180deg,_#08111f_0%,_#050b14_100%)]"></div>

      <aside class="fixed inset-y-0 left-0 z-40 w-72 border-r border-white/10 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 xl:translate-x-0 xl:z-40"
             [class.-translate-x-full]="!mobileMenu()"
             [class.z-50]="mobileMenu()">
        <div class="flex h-full flex-col p-5 overflow-hidden">
          <div class="flex items-center gap-3 border-b border-white/10 pb-5 shrink-0">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-teal-400 text-sm font-black shadow-lg shadow-violet-950/40">
              IS
            </div>
            <div>
              <p class="text-sm font-semibold">InkStock Studio</p>
              <p class="text-xs text-slate-500">Panel operativo</p>
            </div>
          </div>

          <div class="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shrink-0">
            <img [src]="auth.user()?.avatar" alt="" class="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10" />
            <div class="min-w-0">
              <p class="truncate text-sm font-medium text-white">{{ auth.user()?.name }}</p>
              <p class="truncate text-xs text-slate-500 capitalize">{{ auth.user()?.role }} · {{ auth.user()?.title }}</p>
            </div>
          </div>

          <nav class="mt-6 flex-1 space-y-1 overflow-y-auto pr-1 min-h-0">
            <a
              *ngFor="let item of navItems()"
              [routerLink]="item.route"
              routerLinkActive="bg-white/10 text-white border-white/10"
              class="flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm text-slate-400 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
            >
              <i [class]="item.icon" class="text-xl"></i>
              <span>{{ item.label }}</span>
            </a>
          </nav>

          <div class="border-t border-white/10 pt-4 shrink-0">
            <button
              type="button"
              (click)="logout()"
              class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-300 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-200"
            >
              <i class="fa-solid fa-right-from-bracket text-xl"></i>
              <span>Salir</span>
            </button>
          </div>
        </div>
      </aside>

      <div class="xl:pl-72 transition-all duration-300"
           [class.pl-0]="mobileMenu()"
           [class.pointer-events-none]="mobileMenu()"
           [class.opacity-50]="mobileMenu()"
           [class.xl:pointer-events-auto]="true"
           [class.xl:opacity-100]="true">
        <header class="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div class="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
            <div class="flex items-center gap-3">
              <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 xl:hidden" (click)="toggleMobileMenu()">
                <i [class]="mobileMenu() ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl"></i>
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
                <i [class]="theme.isDark() ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" class="text-xl"></i>
              </button>
              <button type="button" class="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-200" (click)="logout()">
                <i class="fa-solid fa-right-from-bracket"></i>
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

      <div *ngIf="mobileMenu()" class="fixed inset-0 z-40 xl:hidden" (click)="mobileMenu.set(false)">
        <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
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
      { label: 'Dashboard', icon: 'fa-solid fa-grip', route: '/dashboard', scope: 'dashboard' },
      { label: 'Inventario', icon: 'fa-solid fa-box', route: '/inventory/products', scope: 'inventory' },
      { label: 'Tatuajes', icon: 'fa-solid fa-paintbrush', route: '/tattoos', scope: 'tattoos' },
      { label: 'Tatuadores', icon: 'fa-solid fa-users', route: '/artists', scope: 'artists' },
      { label: 'Clientes', icon: 'fa-solid fa-user', route: '/clients', scope: 'clients' },
      { label: 'Citas', icon: 'fa-solid fa-calendar', route: '/appointments', scope: 'appointments' },
      { label: 'Sesiones', icon: 'fa-solid fa-heart-pulse', route: '/sessions', scope: 'sessions' },
      { label: 'Reportes', icon: 'fa-solid fa-chart-simple', route: '/reports', scope: 'reports' },
      { label: 'Configuración', icon: 'fa-solid fa-sliders', route: '/settings', scope: 'settings' }
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

  toggleMobileMenu() {
    this.mobileMenu.update(v => !v);
  }

  logout() {
    this.auth.logout();
    void this.router.navigateByUrl('/auth/login');
  }
}
