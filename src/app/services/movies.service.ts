import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = 'e4120b603b961757fd0f20757b3bbce2';
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}&region=us`
    );
  }

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`
    );
  }

  getPopular(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`
    );
  }

  getTopRatedMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&language=en-US&page=${page}`
    );
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getMovieImages(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getRecommendedMovies(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`
    );
  }
}
