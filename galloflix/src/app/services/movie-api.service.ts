import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {


  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "1bbebee9f1603b5558565be66ebaa6ff";

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
  }

  //trending Movies Api Data
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}&language=pt-BR`);
  }

  // Movie Details API Data
  movieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}&language=pt-BR`);
}

 //Movie Trailar API Data
 movieVideo(data: any): Observable<any> {
  return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}&language=pt-BR`)
 }

 movieCast(data: any): Observable<any> {
  return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}&language=pt-BR`)
 }
}
