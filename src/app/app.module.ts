import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import { FilmsPageComponent } from './films/films-page/films-page.component';
import { FilmsCreateComponent } from './films/films-create/films-create.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FilmComponent } from './films/films-page/film/film.component';
import { SallesPagesComponent } from './salles/salles-pages/salles-pages.component';
import { SalleComponent } from './salles/salles-pages/salle/salle.component';
import { ReservationsPagesComponent } from './reservations/reservations-pages/reservations-pages.component';
import { ReservationsCreateComponent } from './reservations/reservations-create/reservations-create.component';
import { ReservationComponent } from './reservations/reservations-pages/reservation/reservation.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersPageComponent } from './users/users-page/users-page.component';
import { UserComponent } from './users/users-page/user/user.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsPageComponent,
    FilmsCreateComponent,
    HomePageComponent,
    FilmComponent,
    SallesPagesComponent,
    SalleComponent,
    ReservationsPagesComponent,
    ReservationsCreateComponent,
    ReservationComponent,
    UsersCreateComponent,
    UsersPageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
