import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypipePipe } from '../mypipe.pipe';
import { StagiairesService } from '../services/stagiaires.service';

@Component({
  selector: 'app-stagiaires',
  standalone: true,
  imports: [CommonModule, MypipePipe],
  templateUrl: './stagiaires.component.html',
  styleUrl: './stagiaires.component.css'
})
export class StagiairesComponent implements OnInit {

  formateur: string = "Mohamed Amine MEZGHICH";
  logo: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhfJQZMxfTEgkCwULqbvcifmRV9CVpEjufFsf9xvKoQ&s";
  
  afficherMsg: boolean = true;
  msg: string = "";
  users: any;

  // Injection d'une dépendance : Service Stagiaires
  constructor(private serviceStagiaires : StagiairesService) {
    console.log("Constructeur");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    this.msg = this.serviceStagiaires.getData();  //prepare les data

    this.serviceStagiaires.getUsers().subscribe(

      response => this.users = response,

      error => console.log(error+"Problème dans l'API")
    );
  }

  greeting() {
    // alert("Bonjour chers étudiants !");
    // this.afficherMsg = !this.afficherMsg;
    alert(this.msg);
    console.log(this.users);
  }

  bye(){
    alert("A très Bientôt !");
  }
}
