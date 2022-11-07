import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  public fetchMovies() {
    return this.httpClient.get<Movie[]>('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=9');
  }
}
