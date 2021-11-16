import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-films-create',
  templateUrl: './films-create.component.html',
  styleUrls: ['./films-create.component.scss']
})
export class FilmsCreateComponent implements OnInit {

  filmForm: FormGroup;

  constructor(private filmService: FilmsService, private router: Router) {
    this.filmForm = new FormGroup({
      titre: new FormControl(""),
      titreOriginal: new FormControl(""),
      langueOriginal: new FormControl(""),
      duree: new FormControl(""),
    })
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    // si le formulaire est valide
    if (this.filmForm.valid) {
      // j'envois mon utilisateur à l'API
      this.filmService.createMovie(this.filmForm.value)
        // si on ne se sert pas de la reponse on mets un "_" en param du callback
        .subscribe((_) => {
          this.router.navigate(['../films']);
        })
    }
    console.log(this.filmForm);
  }
}