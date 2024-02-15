import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal, animaux, displayAllAnimals } from './animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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
