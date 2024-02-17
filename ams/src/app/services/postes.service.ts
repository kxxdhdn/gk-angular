import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostesService {

  constructor(private http:HttpClient) { }

  getPostes() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts"); // consommation d'une api rest
  }
}
