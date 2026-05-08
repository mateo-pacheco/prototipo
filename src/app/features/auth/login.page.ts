import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

type QuickAccess = {
  label: string;
  username: string;
  password: string;
  accent: string;
};

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.28),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.22),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#07111f_55%,_#050b14_100%)]"></div>
      <div class="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div class="absolute right-[-7rem] top-1/3 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl"></div>
      <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 to-transparent"></div>

      <div class="relative mx-auto grid min-h-screen max-w-7xl items-center px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-8">
        <section class="order-2 mx-auto w-full max-w-xl lg:order-1">
          <div class="mb-8 flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-teal-400 text-sm font-black shadow-2xl shadow-violet-950/50">
              IS
            </div>
            <div>
              <p class="text-[11px] uppercase tracking-[0.3em] text-slate-400">InkStock Studio</p>
              <h1 class="text-xl font-semibold text-white">Acceso al panel</h1>
            </div>
          </div>

          <div class="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div class="mb-8">
              <p class="text-sm font-medium text-teal-300">Bienvenido de vuelta</p>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Inicia sesión con tu cuenta
              </h2>
              <p class="mt-3 max-w-lg text-sm leading-6 text-slate-300">
                El formulario fue reconstruido desde cero con Tailwind y validación reactiva. Si entras desde una ruta
                protegida, la app te devuelve a esa pantalla después de autenticarte.
              </p>
            </div>

            <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
              <div>
                <label for="username" class="mb-2 block text-sm font-medium text-slate-200">Usuario</label>
                <div class="group relative">
                  <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">&#64;</span>
                  <input
                    id="username"
                    type="text"
                    formControlName="username"
                    autocomplete="username"
                    placeholder="admin"
                    class="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
                  />
                </div>
                <p *ngIf="form.controls.username.touched && form.controls.username.hasError('required')" class="mt-2 text-xs text-red-300">
                  Escribe tu usuario.
                </p>
              </div>

              <div>
                <label for="password" class="mb-2 block text-sm font-medium text-slate-200">Contraseña</label>
                <div class="group relative">
                  <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">#</span>
                  <input
                    id="password"
                    [type]="showPassword() ? 'text' : 'password'"
                    formControlName="password"
                    autocomplete="current-password"
                    placeholder="********"
                    class="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-2 flex items-center rounded-xl px-3 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                    (click)="showPassword.set(!showPassword())"
                    [attr.aria-label]="showPassword() ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                  >
                    {{ showPassword() ? 'Ocultar' : 'Mostrar' }}
                  </button>
                </div>
                <p *ngIf="form.controls.password.touched && form.controls.password.hasError('required')" class="mt-2 text-xs text-red-300">
                  Escribe tu contraseña.
                </p>
              </div>

              <div class="flex items-center justify-between gap-3 pt-1">
                <label class="flex cursor-pointer items-center gap-3 text-sm text-slate-300">
                  <input type="checkbox" formControlName="remember" class="h-4 w-4 rounded border-white/15 bg-slate-950/70 text-teal-400 focus:ring-teal-400/20" />
                  Recordarme
                </label>
                <button type="button" class="text-sm font-medium text-teal-300 transition hover:text-teal-200">
                  Olvidé mi contraseña
                </button>
              </div>

              <div *ngIf="errorMessage()" class="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {{ errorMessage() }}
              </div>

              <button
                type="submit"
                [disabled]="form.invalid || loading()"
                class="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400 px-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span *ngIf="!loading(); else loadingTpl">Entrar al panel</span>
                <ng-template #loadingTpl>Validando...</ng-template>
              </button>
            </form>

            <div class="mt-6 border-t border-white/10 pt-6">
              <div class="mb-3 flex items-center justify-between">
                <p class="text-sm font-medium text-white">Acceso rápido</p>
                <p class="text-xs text-slate-400">Credenciales demo</p>
              </div>

              <div class="grid gap-3 sm:grid-cols-3">
                <button
                  *ngFor="let user of quickUsers"
                  type="button"
                  (click)="fillQuickUser(user.username, user.password)"
                  class="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/90"
                  [style.boxShadow]="'inset 0 0 0 1px ' + user.accent"
                >
                  <p class="text-sm font-semibold text-white">{{ user.label }}</p>
                  <p class="mt-1 text-xs text-slate-400">{{ user.username }}</p>
                </button>
              </div>
            </div>
          </div>
        </section>

        <aside class="order-1 mb-8 lg:order-2 lg:mb-0">
          <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
            <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.12),transparent_42%,rgba(20,184,166,0.12))]"></div>
            <div class="relative">
              <p class="text-[11px] uppercase tracking-[0.3em] text-slate-400">InkStock Studio</p>
              <h2 class="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Control de citas, inventario y sesiones en una interfaz clara.
              </h2>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xs uppercase tracking-[0.22em] text-slate-400">Seguridad demo</p>
                  <p class="mt-2 text-lg font-semibold text-white">Usuario y contraseña</p>
                  <p class="mt-2 text-sm leading-6 text-slate-300">
                    El login valida contra los perfiles en memoria y mantiene el flujo de la app.
                  </p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-xs uppercase tracking-[0.22em] text-slate-400">Redirección</p>
                  <p class="mt-2 text-lg font-semibold text-white">Respeta el guard</p>
                  <p class="mt-2 text-sm leading-6 text-slate-300">
                    Si hay redirect, el formulario vuelve al destino original al autenticar.
                  </p>
                </div>
              </div>

              <div class="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Dashboard</span>
                <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Inventario</span>
                <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Citas</span>
                <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Sesiones</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `
})
export class LoginPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly loading = signal(false);
  readonly showPassword = signal(false);
  readonly errorMessage = signal('');

  readonly quickUsers: QuickAccess[] = [
    { label: 'Admin', username: 'admin', password: 'admin123', accent: '#7c3aed' },
    { label: 'Tatuador', username: 'tatuador', password: 'tattoo123', accent: '#0ea5e9' },
    { label: 'Recepción', username: 'recepcionista', password: 'frontdesk123', accent: '#f97316' }
  ];

  readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: [true]
  });

  readonly redirectTo = this.route.snapshot.queryParamMap.get('redirect') ?? '/dashboard';

  fillQuickUser(username: string, password: string) {
    this.form.patchValue({ username, password });
    this.errorMessage.set('');
  }

  submit() {
    this.errorMessage.set('');
    this.form.markAllAsTouched();

    if (this.form.invalid || this.loading()) {
      return;
    }

    this.loading.set(true);

    const { username, password } = this.form.getRawValue();
    const ok = this.auth.login(username.trim(), password);

    this.loading.set(false);

    if (!ok) {
      this.errorMessage.set('Usuario o contraseña incorrectos.');
      return;
    }

    void this.router.navigateByUrl(this.redirectTo);
  }
}
