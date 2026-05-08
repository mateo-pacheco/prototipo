import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppDialogRef } from './app-dialog.service';

export interface DetailRow {
  label: string;
  value: string | number | boolean | null | undefined;
}

export interface EntityDetailDialogData {
  title: string;
  subtitle?: string;
  image?: string;
  rows: DetailRow[];
}

@Component({
  selector: 'app-entity-detail-dialog',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'block w-full' },
  template: `
    <div class="flex max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 text-white shadow-2xl shadow-black/40">
      <div class="flex-1 overflow-y-auto p-6 pr-4">
        <div class="flex flex-col gap-5 md:flex-row">
          <img *ngIf="data.image" [src]="data.image" alt="" class="h-52 w-full rounded-[1.5rem] object-cover md:w-64" />
          <div class="flex-1">
            <h2 class="text-2xl font-semibold tracking-tight">{{ data.title }}</h2>
            <p class="mt-2 text-sm text-slate-400">{{ data.subtitle }}</p>
            <div class="mt-6 grid gap-3 md:grid-cols-2">
              <div *ngFor="let row of data.rows" class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-[11px] uppercase tracking-[0.24em] text-slate-500">{{ row.label }}</p>
                <p class="mt-2 text-sm font-medium text-white">{{ row.value ?? 'N/A' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shrink-0 border-t border-white/10 bg-slate-950 px-6 py-4">
        <div class="flex justify-end">
          <button
            type="button"
            class="inline-flex h-11 items-center justify-center rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400"
            (click)="close()"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  `
})
export class EntityDetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EntityDetailDialogData,
    private readonly dialogRef: AppDialogRef
  ) {}

  close() {
    this.dialogRef.close();
  }
}
