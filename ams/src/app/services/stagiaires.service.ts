import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StagiairesService {

  constructor(private http:HttpClient) { }

  mesObjets: any[] = [10, "hello", true]

  getData(): string {
    return "Hello from service";
  }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users"); // consommation d'une api rest
  }
}
