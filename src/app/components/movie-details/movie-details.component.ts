import { Subscription } from 'rxjs';
import { MoviesService } from './../../services/movies.service';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public id: number;
  public video: boolean;
  trailerOn: boolean = false;
  videoOn: boolean = false;
  movie: any;
  videoKey: string;
  subscription: Subscription;

  relatedvideo: any;
  casts: any;
  backdrops: any = [];
  recommendMovies: any = [];
  responsiveOptions;

  constructor(
    private _moviesService: MoviesService,
    private route: ActivatedRoute
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 2,
      },
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getMovieDetails(this.id);
      this.getCast(this.id);
      this.getMovieVideos(this.id);
      this.getMovieImage(this.id);
      this.getRecommend(this.id);
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getMovieDetails(id) {
    this.subscription = this._moviesService.getMovie(id).subscribe((res) => {
      this.movie = res;
    });
  }

  getMovieVideos(id) {
    this.subscription = this._moviesService
      .getMovieVideos(id)
      .subscribe((res) => {
        if (res.results) {
          this.relatedvideo = res.results;
        }
      });
  }

  getCast(id) {
    this.subscription = this._moviesService
      .getMovieCredits(id)
      .subscribe((res) => {
        this.casts = res?.cast;
      });
  }

  getMovieImage(id) {
    this.subscription = this._moviesService
      .getMovieImages(id)
      .subscribe((res) => {
        this.backdrops = res.backdrops;
      });
  }

  getRecommend(id) {
    this.subscription = this._moviesService
      .getRecommendedMovies(id)
      .subscribe((res) => {
        this.recommendMovies = res.results;
      });
  }

  turnOnTrailer() {
    this.trailerOn = true;
  }
  turnOnVideo() {
    this.videoOn = true;
  }
  turnOffTrailer() {
    this.trailerOn = false;
    this.videoOn = false;
  }

  getKey(key) {
    this.videoKey = key;
  }
}
