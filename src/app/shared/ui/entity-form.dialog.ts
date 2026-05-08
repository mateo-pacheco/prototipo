import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type EntityFieldType = 'text' | 'textarea' | 'number' | 'select' | 'date' | 'time';

export interface EntityFieldConfig {
  key: string;
  label: string;
  type: EntityFieldType;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  required?: boolean;
}

export interface EntityFormDialogData {
  title: string;
  subtitle?: string;
  fields: EntityFieldConfig[];
  value?: Record<string, unknown>;
}

@Component({
  selector: 'app-entity-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  host: { class: 'block w-full' },
  template: `
    <div class="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl shadow-black/40">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold tracking-tight">{{ data.title }}</h2>
        <p class="mt-2 text-sm text-slate-400">{{ data.subtitle }}</p>
      </div>

      <form [formGroup]="form" class="grid gap-4 md:grid-cols-2">
        <ng-container *ngFor="let field of data.fields">
          <div class="md:col-span-1" [class.md:col-span-2]="field.type === 'textarea'">
            <label class="mb-2 block text-sm font-medium text-slate-200">{{ field.label }}</label>

            <input
              *ngIf="field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type === 'time'"
              class="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
              [type]="field.type"
              [formControlName]="field.key"
              [placeholder]="field.placeholder || ''"
            />

            <textarea
              *ngIf="field.type === 'textarea'"
              rows="4"
              class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
              [formControlName]="field.key"
              [placeholder]="field.placeholder || ''"
            ></textarea>

            <select
              *ngIf="field.type === 'select'"
              class="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-teal-400/60 focus:ring-4 focus:ring-teal-400/10"
              [formControlName]="field.key"
            >
              <option value="" class="bg-slate-950"></option>
              <option *ngFor="let option of field.options || []" [value]="option.value" class="bg-slate-950">
                {{ option.label }}
              </option>
            </select>

            <p *ngIf="form.get(field.key)?.invalid && form.get(field.key)?.touched" class="mt-2 text-xs text-red-300">
              Campo requerido
            </p>
          </div>
        </ng-container>
      </form>

      <div class="mt-6 flex justify-end gap-3">
        <button
          type="button"
          class="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          (click)="dialogRef.close()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="inline-flex h-11 items-center justify-center rounded-2xl bg-violet-500 px-4 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          [disabled]="form.invalid"
          (click)="save()"
        >
          Guardar
        </button>
      </div>
    </div>
  `
})
export class EntityFormDialogComponent {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: EntityFormDialogData,
    readonly dialogRef: MatDialogRef<EntityFormDialogComponent>
  ) {
    const controls = Object.fromEntries(
      data.fields.map((field) => [field.key, [data.value?.[field.key] ?? '', field.required ? Validators.required : []]])
    );
    this.form = this.fb.group(controls);
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.dialogRef.close(this.form.getRawValue());
  }
}
