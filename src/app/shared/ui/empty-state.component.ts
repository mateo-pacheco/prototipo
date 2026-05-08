import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  host: { class: 'block w-full' },
  template: `
    <div class="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center">
      <div class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
        <mat-icon class="!text-3xl">{{ icon() }}</mat-icon>
      </div>
      <h3 class="mt-5 text-xl font-semibold text-white">{{ title() }}</h3>
      <p class="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">{{ message() }}</p>
      <div class="mt-6">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class EmptyStateComponent {
  icon = input('inbox');
  title = input('Sin datos');
  message = input('No hay registros para mostrar.');
}
