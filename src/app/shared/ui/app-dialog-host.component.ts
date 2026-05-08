import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { AppDialogService } from './app-dialog.service';

@Component({
  selector: 'app-dialog-host',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    <div *ngIf="dialog.state() as state" class="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        class="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-default"
        (click)="backdropClick()"
        aria-label="Cerrar diálogo"
      ></button>

      <div
        class="relative z-50 w-full overflow-visible animate-in fade-in zoom-in-95 duration-200"
        [style.width]="state.width"
        [style.maxWidth]="state.maxWidth"
        [style.maxHeight]="state.maxHeight"
      >
        <ng-container *ngComponentOutlet="state.component; injector: state.injector"></ng-container>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-in {
      animation: fadeIn 0.2s ease-out forwards;
    }
  `]
})
export class AppDialogHostComponent {
  readonly dialog = inject(AppDialogService);

  backdropClick() {
    const state = this.dialog.state();
    if (!state?.closeOnBackdropClick) return;
    this.dialog.close();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.dialog.state()) {
      this.dialog.close();
    }
  }
}
