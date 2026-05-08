import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDialogHostComponent } from './shared/ui/app-dialog-host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppDialogHostComponent],
  template: `<router-outlet></router-outlet><app-dialog-host></app-dialog-host>`
})
export class AppComponent {}
