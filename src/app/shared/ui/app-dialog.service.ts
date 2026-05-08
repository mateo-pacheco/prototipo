import { DOCUMENT } from '@angular/common';
import { Injectable, Injector, Type, effect, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';

export interface AppDialogConfig<TData = unknown> {
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  data?: TData;
  closeOnBackdropClick?: boolean;
}

export interface AppDialogState {
  component: Type<any>;
  injector: Injector;
  width: string;
  maxWidth: string;
  maxHeight: string;
  closeOnBackdropClick: boolean;
}

export class AppDialogRef<TResult = unknown> {
  private readonly closed = new Subject<TResult | undefined>();
  private isClosed = false;

  close(result?: TResult) {
    if (this.isClosed) return;
    this.isClosed = true;
    this.closed.next(result);
    this.closed.complete();
  }

  afterClosed(): Observable<TResult | undefined> {
    return this.closed.asObservable();
  }
}

@Injectable({ providedIn: 'root' })
export class AppDialogService {
  readonly state = signal<AppDialogState | null>(null);
  private readonly injector = inject(Injector);
  private readonly document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      const active = !!this.state();
      this.document.body.classList.toggle('app-dialog-open', active);
    });
  }

  open<TComponent, TData = unknown, TResult = unknown>(component: Type<TComponent>, config: AppDialogConfig<TData> = {}): AppDialogRef<TResult> {
    const ref = new AppDialogRef<TResult>();
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: config.data },
        { provide: AppDialogRef, useValue: ref }
      ]
    });

    this.state.set({
      component,
      injector,
      width: config.width || '600px',
      maxWidth: config.maxWidth || 'calc(100vw - 2rem)',
      maxHeight: config.maxHeight || 'calc(100vh - 2rem)',
      closeOnBackdropClick: config.closeOnBackdropClick !== false
    });

    ref.afterClosed().subscribe(() => {
      if (this.state()?.injector === injector) {
        this.state.set(null);
      }
    });

    return ref;
  }

  close<TResult = unknown>(result?: TResult) {
    const current = this.state();
    if (!current) return;
    const ref = current.injector.get(AppDialogRef) as AppDialogRef<TResult>;
    ref.close(result);
  }
}
