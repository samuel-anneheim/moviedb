import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Salle } from '../models/salles';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  constructor(private http: HttpClient) { }

  getSalles(): Observable<Salle[]>{
    return this.http.get<Salle[]>(`${environment.apiUrl}/salles`)
  }
}
