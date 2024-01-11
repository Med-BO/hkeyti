import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../models/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  API_URI = 'http://localhost:8000/api/publications';
  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get(`${this.API_URI}/categories`);
  }

  getAllPostsByCategory(categoryId: number) {
    return this.http.get(`${this.API_URI}/categorie/${categoryId}`);
  }

  getCategoryById(categoryId: number) {
    return this.http.get(`http://localhost:8000/api/categorie/${categoryId}`);
  }

  addPost(post: Map<string, any>) {
    return this.http.post(`${this.API_URI}/ajouter`, post);
  }

  reactToPost(postId: number, userId: number, reactionType: string) {
    return this.http.post(
      `${this.API_URI}/${postId}/reagir`, 
      { 
        'publication': postId, 'auteur': userId, 'type_reaction': reactionType 
      }
    );
  }

  updateReactionToPost(postId: number, userId: number, reactionType: string) {
    return this.http.put(
      `${this.API_URI}/${postId}/reagir`, 
      { 
        'publication': postId, 'auteur': userId, 'type_reaction': reactionType 
      }
    );
  }
}
