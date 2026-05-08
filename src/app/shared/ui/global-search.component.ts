import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-global-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  host: { class: 'block w-full' },
  template: `
    <div class="relative w-full">
      <div class="relative">
        <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-500">
          <i class="fa-solid fa-magnifying-glass text-lg"></i>
        </span>
        <input
          type="text"
          [(ngModel)]="query"
          (ngModelChange)="changed($event)"
          placeholder="Buscar en InkStock"
          class="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/70 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
        />
      </div>

      <div *ngIf="open() && filtered().length > 0" class="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <button
          *ngFor="let result of filtered()"
          type="button"
          (click)="go(result)"
          class="flex w-full items-center justify-between gap-3 border-b border-white/5 px-4 py-3 text-left transition last:border-b-0 hover:bg-white/5"
        >
          <span class="min-w-0 truncate text-sm text-white">{{ result.label }}</span>
          <span class="text-xs uppercase tracking-[0.22em] text-slate-500">{{ result.type }}</span>
        </button>
      </div>
    </div>
  `
})
export class GlobalSearchComponent {
  private readonly router = inject(Router);
  private readonly search = inject(SearchService);
  private readonly host = inject(ElementRef<HTMLElement>);

  query = '';
  readonly filtered = signal(this.search.search(''));
  readonly open = signal(false);

  changed(value: string) {
    this.filtered.set(this.search.search(value));
    this.open.set(!!value && this.filtered().length > 0);
  }

  go(result: { route: string }) {
    void this.router.navigateByUrl(result.route);
    this.query = '';
    this.filtered.set([]);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }
}
