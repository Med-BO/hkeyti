import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/data/models/categorie.model';
import { Membre } from 'src/app/data/models/membre.model';
import { Publication } from 'src/app/data/models/publication.model';
import { PublicationsService } from 'src/app/data/services/publications-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  user: Membre = new Membre(
    1,
    "Ben Othman",
    "Mohamed",
    "mohamedbenothman2@gmail.com",
    "test",
    "1998-05-05",
    "H",
    "test",
    "enabled"
  );
  categoryId: number = 0;
  posts: Publication[] = [];
  loader = true
  addLoader = false
  commentAddLoader = false
  category: Categorie = new Categorie();
  postToAdd: any = {
    titre: "",
    contenu: "",
    categorie: this.categoryId,
    parent: 0,
    auteur: this.user.id
  };
  commentToAdd: any = {
    titre: "",
    contenu: "",
    categorie: this.categoryId,
    parent: 0,
    auteur: this.user.id
  };
  
  constructor(private publicationService: PublicationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the category id from the activated route object
    this.route.params.subscribe(
      (params) => {
        this.categoryId = params['categoryId'];
        this.postToAdd.categorie = this.categoryId;
        this.commentToAdd.categorie = this.categoryId;
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
    this.addLoader = true;
    this.publicationService.addPost(this.postToAdd)
    .subscribe(
      {
        next: (data: any) => {
          const addedPost = new Publication().deserialize(data);
          this.posts.unshift(addedPost);
          this.addLoader = false;
          this.postToAdd = {
            titre: "",
            contenu: "",
            categorie: this.categoryId,
            parent: 0,
            auteur: this.user.id
          };
        },
        error: (err: any) => {
          console.error('error', err);
        }
      }
    );
  }

  addComment(postId: number) {
    this.commentAddLoader = true;
    this.commentToAdd.parent = postId;
    console.log(this.commentToAdd)
    this.publicationService.addPost(this.commentToAdd)
    .subscribe(
      {
        next: (data: any) => {
          const addedComment = new Publication().deserialize(data);
          const post = this.posts.find((post) => post.id === postId);
          post!.commentaires.unshift(addedComment);
          this.commentToAdd = {
            titre: "",
            contenu: "",
            categorie: this.categoryId,
            parent: 0,
            auteur: this.user.id
          };
          this.commentAddLoader = false;
        },
        error: (err: any) => {
          console.error('error', err);
        }
      }
    );
  }

  setCommentContent(event: any) {
    this.commentToAdd.contenu = event.target.value;
  }

}
