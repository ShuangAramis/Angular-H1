import { Component, OnInit } from '@angular/core';
import {MovieService} from "./services/movie.service";
import {Movie} from "./model/Movie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-h1'
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  public ngOnInit() {
    this.fetchMovies();
  }

  public fetchMovies() {
    this.movieService.fetchMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies;
        console.log(movies);
      }
    })
  }
}
