import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsServiceService {
  API_URI = 'http://localhost:8000/api/publications';
  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get(`${this.API_URI}/categories`);
  }
}
