import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/shared/models/salles';
import { SallesService } from 'src/app/shared/services/salles.service';

@Component({
  selector: 'app-salles-pages',
  templateUrl: './salles-pages.component.html',
  styleUrls: ['./salles-pages.component.scss']
})
export class SallesPagesComponent implements OnInit {

  salles: Salle[]= []

  constructor(private salleService: SallesService) { }

  ngOnInit(): void {
    this.salleService.getSalles()
    .subscribe((salles:Salle[])=>{
      this.salles = salles
    })
  }

}
