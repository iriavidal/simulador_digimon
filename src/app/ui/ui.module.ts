import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';

@NgModule({
  declarations: [SkeletonCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [SkeletonCardComponent],
})
export class UiModule {}
