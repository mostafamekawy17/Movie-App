import { TvshowsService } from './../../services/tvshows.service';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nowPlaying: any;
  onAir: any;
  responsiveOptions;
  loader:boolean = true;

  constructor(
    private _moviesService: MoviesService,
    private _tvService: TvshowsService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 2,
      },
    ];
  }

  ngOnInit(): void {
    this.trendingMovies(1);
    this.tvOnTheAir(1);
  }

  trendingMovies(page: number) {
    this._moviesService.getNowPlaying(page).pipe(delay(2000)).subscribe((res) => {
      this.nowPlaying = res.results;
      this.loader = false;
    });
  }

  tvOnTheAir(page: number) {
    this._tvService.getTvOnTheAir(page).pipe(delay(2000)).subscribe((res) => {
      this.onAir = res.results;
      this.loader = false;
    });
  }
}
