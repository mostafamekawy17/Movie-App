import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit, OnDestroy {
  topRated: any;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;
  subscription:Subscription;
  constructor(private _tvService: TvshowsService) {}

  ngOnInit(): void {
    this.getTopRatedTv(1);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTopRatedTv(page: number) {
    this.subscription = this._tvService
      .getTopRatedTVShows(page)
      .pipe(delay(2000))
      .subscribe(
        (res) => {
          this.topRated = res.results;
          this.totalResults = res.total_results;
          this.loader = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  changePage(event) {
    this.loader = true;
    this.getTopRatedTv(event.pageIndex + 1);
  }

  searchTv() {
    this.loader = true;
    this.subscription = this._tvService.searchtv(this.searchStr).pipe(delay(2000)).subscribe((res) => {
      this.searchRes = res.results;
      this.loader = false;
    });
  }
}
