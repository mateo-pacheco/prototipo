import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'block w-full' },
  template: `
    <div class="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-10 text-center">
      <div class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white">
        <i [class]="icon() + ' text-3xl'"></i>
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
  icon = input('fa-solid fa-inbox');
  title = input('Sin datos');
  message = input('No hay registros para mostrar.');
}
