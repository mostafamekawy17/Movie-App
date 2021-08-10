import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
      MoviesRoutingModule,
      SharedModule
  ],
})
export class MoviesModule {}
