import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../model/Movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  // @ts-ignore
  @Input movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
