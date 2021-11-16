import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/films';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {

  films: Film[] = []

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getMovies()
    .subscribe((films:Film[])=> {
      this.films = films
    }) 
  }
}
