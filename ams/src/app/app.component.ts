import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Animal, animaux, displayAllAnimals } from './animal';
import { StagiairesComponent } from "./stagiaires/stagiaires.component";
import { PostesComponent } from "./postes/postes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, StagiairesComponent, PostesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ams';

  // Création d'un tableau de 4 animaux
  animaux: Animal[] = animaux;

  // Méthode pour afficher les infos de tous les animaux
  displayAllAnimals(): void {
    displayAllAnimals(this.animaux);
  }
}
