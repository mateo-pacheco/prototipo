import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppDialogRef } from './app-dialog.service';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: 'danger' | 'warning' | 'neutral';
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'block w-full' },
  template: `
    <div class="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl shadow-black/40">
      <div class="flex items-start gap-4">
        <div
          class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
          [ngClass]="{
            'bg-red-500/20': data.tone === 'danger',
            'bg-amber-500/20': data.tone === 'warning',
            'bg-white/10': !data.tone || data.tone === 'neutral'
          }"
        >
          <span class="text-lg font-semibold text-white">!</span>
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-xl font-semibold">{{ data.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-400">{{ data.message }}</p>
        </div>
      </div>

      <div class="mt-6 flex justify-end gap-3">
        <button
          type="button"
          class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          (click)="dialogRef.close(false)"
        >
          {{ data.cancelLabel || 'Cancelar' }}
        </button>
        <button
          type="button"
          class="inline-flex h-11 items-center justify-center rounded-2xl px-4 text-sm font-semibold text-white transition"
          [ngClass]="{
            'bg-red-500 hover:bg-red-400': data.tone === 'danger',
            'bg-amber-500 hover:bg-amber-400': data.tone === 'warning',
            'bg-violet-500 hover:bg-violet-400': !data.tone || data.tone === 'neutral'
          }"
          (click)="confirm()"
        >
          {{ data.confirmLabel || 'Confirmar' }}
        </button>
      </div>
    </div>
  `
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    readonly dialogRef: AppDialogRef
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }
}
