import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  host: { class: 'block w-full' },
  template: `
    <nav class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
      <ng-container *ngFor="let item of items(); let last = last">
        <a [routerLink]="item.link || null" class="transition hover:text-white">{{ item.label }}</a>
        <span *ngIf="!last" class="text-slate-700">/</span>
      </ng-container>
    </nav>
  `
})
export class BreadcrumbsComponent {
  items = input<{ label: string; link?: string }[]>([]);
}
