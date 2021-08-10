import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MoviesService } from './../../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  topRated: any;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;
  subsription:Subscription;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getTopRatedMovies(1);
  }
  ngOnDestroy() {
    this.subsription.unsubscribe();
  }

  getTopRatedMovies(page: number) {
    this.subsription = this._moviesService
      .getTopRatedMovies(page)
      .pipe(delay(2000))
      .subscribe(
        (res: any) => {
          this.topRated = res.results;
          this.totalResults = res.total_results;
          this.loader = false;
        },
        (error) => console.log(error)
      );
  } 

  changePage(event) {
    this.loader = true;
    this.getTopRatedMovies(event.pageIndex + 1);
  }

  searchMovies() {
    this.loader = true;
    this.subsription = this._moviesService.searchMovies(this.searchStr).pipe(delay(2000)).subscribe((res) => {
      this.searchRes = res.results;
      this.loader = false;
    });
  }
}
