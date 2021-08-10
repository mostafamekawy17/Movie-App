import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
})
export class TvDetailsComponent implements OnInit, OnDestroy {
  public id: number;
  public video: boolean;
  tvshow: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  relatedvideo: any;
  casts: any;
  backdrops: any = [];
  recomendTV: any = [];
  trailerOn: boolean = false;
  videoOn: boolean = false;
  videoKey: string;
  responsiveOptions;
  subscription: Subscription;

  constructor(
    private _tvService: TvshowsService,
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
    this.subscription = this.route.params.subscribe((params: Params) => {
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
    this.subscription = this._tvService.getTVShow(id).subscribe((res) => {
      this.tvshow = res;
    });
  }

  getMovieVideos(id) {
    this.subscription = this._tvService.getTvVideos(id).subscribe((res) => {
      if (res.results) {
        this.relatedvideo = res.results;
      }
    });
  }

  getCast(id) {
    this.subscription = this._tvService.getMovieCredits(id).subscribe((res) => {
      this.casts = res?.cast;
    });
  }

  getMovieImage(id) {
    this.subscription = this._tvService
      .getTvBackdropsImages(id)
      .subscribe((res) => {
        this.backdrops = res.backdrops;
      });
  }

  getRecommend(id) {
    this.subscription = this._tvService
      .getRecommendedTv(id)
      .subscribe((res) => {
        this.recomendTV = res.results;
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
