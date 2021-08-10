import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  baseUrl: string;
  apiKey: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = 'e4120b603b961757fd0f20757b3bbce2';
  }

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=en-US`
    );
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=en-US`
    );
  }

  getTopRatedTVShows(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=${page}&language=en-US`
    );
  }

  getTVShow(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }

  getTvVideos(id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}&language=en-US`
    );
  }

  getTvBackdropsImages(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`
    );
  }
  getMovieCredits(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}&language=en-US`
    );
  }
  searchtv(searchStr: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`
    );
  }
  getRecommendedTv(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}/recommendations?api_key=${this.apiKey}`
    );
  }
}
