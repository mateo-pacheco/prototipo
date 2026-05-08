import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  host: { class: 'block w-full' },
  template: `
    <div class="mb-8 flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div class="space-y-3">
        <nav class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
          <ng-container *ngFor="let item of breadcrumbs(); let last = last">
            <a [routerLink]="item.link || null" class="transition hover:text-white">{{ item.label }}</a>
            <span *ngIf="!last" class="text-slate-700">/</span>
          </ng-container>
        </nav>
        <div class="space-y-2">
          <h1 class="text-3xl font-semibold tracking-tight text-white md:text-4xl">{{ title() }}</h1>
          <p class="max-w-3xl text-sm leading-6 text-slate-400 md:text-base">{{ subtitle() }}</p>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <ng-content select="[actions]"></ng-content>
      </div>
    </div>
  `
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input('');
  breadcrumbs = input<Array<{ label: string; link?: string }>>([]);
}
