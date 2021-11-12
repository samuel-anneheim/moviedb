import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/films';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Film[]>{
    return this.http.get<Film[]>(`${environment.apiUrl}/films`)
  }
}
