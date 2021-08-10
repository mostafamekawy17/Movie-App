import { DropdownDirective } from './dropdown.directive';
import { ShortenStorylinePipe } from './pipes/shorten-storyline.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CarouselModule } from 'primeng/carousel';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { TrailerComponent } from './trailer/trailer.component';
import { MyskeletonComponent } from './myskeleton/myskeleton.component';

@NgModule({
  declarations: [
    TrailerComponent,
    MyskeletonComponent,
    ShortenTitlePipe,
    ShortenStorylinePipe,
    DropdownDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    MatTabsModule,
    MatPaginatorModule,
    NgxSkeletonLoaderModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    MatTabsModule,
    MatPaginatorModule,
    TrailerComponent,
    NgxSkeletonLoaderModule,
    MyskeletonComponent,
    ShortenTitlePipe,
    ShortenStorylinePipe,
    MatProgressSpinnerModule,
    DropdownDirective,
  ],
})
export class SharedModule {}
