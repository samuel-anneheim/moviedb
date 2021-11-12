import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './films/films-page/films-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SallesPagesComponent } from './salles/salles-pages/salles-pages.component';
import { UsersPageComponent } from './users/users-page/users-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},

  {path: "films", children: [
    {path: "", component: FilmsPageComponent}
  ]},

  {path: "salles", children:[
    {path: "", component: SallesPagesComponent}
  ]},
  
  {path: "clients", children: [
    {path: "", component: UsersPageComponent}
  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
