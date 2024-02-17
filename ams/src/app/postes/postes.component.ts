import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostesService } from '../services/postes.service';

@Component({
  selector: 'app-postes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postes.component.html',
  styleUrl: './postes.component.css'
})
export class PostesComponent implements OnInit {

  postes: any;
  constructor(private postesService: PostesService) {
  }

  ngOnInit(): void {
    //prepare les data

    this.postesService.getPostes().subscribe(

      response=> this.postes = response,

      error => console.log(error+"Problème dans l'API")
    );
  }

}
