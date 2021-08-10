import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { TvDetailsModule } from './components/tv-details/tv-details.module';
import { SharedModule } from './shared/shared.module';
import { MovieDetailsModule } from './components/movie-details/movie-details.module';
import { TvModule } from './components/tv/tv.module';
import { MoviesModule } from './components/movies/movies.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    TvModule,
    MovieDetailsModule,
    SharedModule,
    TvDetailsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
