import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  host: { class: 'block w-full' },
  template: `
    <div class="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-sm text-slate-400">{{ label() }}</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-white">{{ value() }}</h3>
          <p class="mt-2 text-xs leading-5 text-slate-500">{{ description() }}</p>
        </div>
        <div class="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg" [style.background]="badgeBackground()">
          <i [class]="icon() + ' text-xl'"></i>
        </div>
      </div>
    </div>
  `
})
export class StatCardComponent {
  label = input.required<string>();
  value = input.required<string | number>();
  description = input('');
  icon = input('fa-solid fa-chart-line');
  badgeBackground = input('linear-gradient(135deg, #7c3aed, #14b8a6)');
}
