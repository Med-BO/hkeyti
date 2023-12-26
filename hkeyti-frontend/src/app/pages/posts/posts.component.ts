import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/data/models/categorie.model';
import { Publication } from 'src/app/data/models/publication.model';
import { PublicationsService } from 'src/app/data/services/publications-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  categoryId: number = 0;
  posts: Publication[] = [];
  loader = true
  category: Categorie = new Categorie();

  constructor(private publicationService: PublicationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the category id from the activated route object
    this.route.params.subscribe(
      (params) => {
        this.categoryId = params['categoryId'];
      }
    );
    this.publicationService.getCategoryById(this.categoryId).subscribe({
      next: (data: any) => {
        this.category = new Categorie().deserialize(data);
      },
      error: (err: any) => {
        console.error('error', err);
      }
    })
    this.publicationService.getAllPostsByCategory(this.categoryId)
    .subscribe(
      {
        next: (data: any) => {
          console.log(data)
          for (let post of data) {
            this.posts.push(new Publication().deserialize(post));
          }
          console.log(this.posts)
          this.loader = false
        },
        error: (err: any) => {
          console.error('error', err);
          this.loader = false
        }
      }
    );
  }

  addPost() {
    const requestBody = new Map<string, any>();
    requestBody.set('titre', 'Mon titre');
    this.publicationService.addPost(requestBody)
    .subscribe(
      {
        next: (data: any) => {
          const addedPost = new Publication().deserialize(data);
          this.posts.push(addedPost);
        },
        error: (err: any) => {
          console.error('error', err);
        }
      }
    );
  }

}
