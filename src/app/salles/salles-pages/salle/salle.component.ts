import { Component, Input, OnInit } from '@angular/core';
import { Salle } from 'src/app/shared/models/salles';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  @Input() salle!: Salle

  constructor() { }

  ngOnInit(): void {
  }

}
