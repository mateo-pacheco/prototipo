import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skeleton-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-3">
      <div *ngFor="let _ of items()" class="h-20 animate-pulse rounded-[1.4rem] bg-white/6"></div>
    </div>
  `
})
export class SkeletonListComponent {
  items = input(4);
}
