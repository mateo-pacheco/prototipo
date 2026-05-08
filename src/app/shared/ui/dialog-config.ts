import { AppDialogConfig } from './app-dialog.service';

export function buildResponsiveDialogConfig<T>(width: string): AppDialogConfig<T> {
  return {
    width,
    maxWidth: 'calc(100vw - 2rem)',
    maxHeight: 'calc(100vh - 2rem)',
    closeOnBackdropClick: true
  };
}
