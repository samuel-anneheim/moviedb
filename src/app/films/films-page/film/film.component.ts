import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/films';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film!: Film

  constructor() { }

  ngOnInit(): void {
  }

}
