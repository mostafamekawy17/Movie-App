import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () =>
      import('./components/movies/movies.module').then(
        (mod) => mod.MoviesModule
      ),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./components/movie-details/movie-details.module').then(
        (mod) => mod.MovieDetailsModule
      ),
  },
  {
    path: 'tv',
    loadChildren: () =>
      import('./components/tv/tv.module').then((mod) => mod.TvModule),
  },
  {
    path: 'tv/:id',
    loadChildren: () =>
      import('./components/tv-details/tv-details.module').then(
        (mod) => mod.TvDetailsModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
