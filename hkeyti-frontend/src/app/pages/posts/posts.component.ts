import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/data/models/categorie.model';
import { Membre } from 'src/app/data/models/membre.model';
import { Publication } from 'src/app/data/models/publication.model';
import { ReactionPublication } from 'src/app/data/models/reaction-publication.model';
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
          this.treatPostsReactions();
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

  treatPostsReactions() {
    for (let post of this.posts) {
      post.treatedReactions = {
        likes: 0,
        dislikes: 0,
        loves: 0
      }
      for (let react of post.reactions) {
        if (react.type === '1') {
          post.treatedReactions.likes++;
        } else if (react.type === '2') {
          post.treatedReactions.dislikes++;
        } else if (react.type === '3') {
          post.treatedReactions.loves++;
        }
        // Check if the current user reacted to this post
        if (react.auteur.id === this.user.id) {
          post.treatedReactions.userReaction = react.type;
        }
      }
    }
  }

  addPost() {
    this.addLoader = true;
    this.publicationService.addPost(this.postToAdd)
    .subscribe(
      {
        next: (data: any) => {
          const addedPost = new Publication().deserialize(data);
          addedPost.treatedReactions = {
            likes: 0,
            dislikes: 0,
            loves: 0
          }
          addedPost.commentaires = [];
          addedPost.reactions = [];
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

  reactToPost(postId: number, reaction: string) {
    // If the user hasn't already reacted to the post
    if (!this.posts.find((post) => post.id === postId)!.treatedReactions.userReaction) {
      this.publicationService.reactToPost(postId, this.user.id, reaction).subscribe({
        next: (data: any) => {
          const post = this.posts.find((post) => post.id === postId);
          post!.reactions.push(new ReactionPublication().deserialize(data));
          post!.treatedReactions.userReaction = reaction;
          if (reaction === '1') {
            post!.treatedReactions.likes++;
          } else if (reaction === '2') {
            post!.treatedReactions.dislikes++;
          } else if (reaction === '3') {
            post!.treatedReactions.loves++;
          }
        },
        error: (err: any) => {
          console.error('error', err);
        }
      });
    }
    else {
      this.publicationService.updateReactionToPost(postId, this.user.id, reaction).subscribe({
        next: (data: any) => {
          const post = this.posts.find((post) => post.id === postId);
          const reaction = post!.reactions.find((reaction) => reaction.auteur.id === this.user.id);
          if (reaction!.type === '1') {
            post!.treatedReactions.likes--;
          } else if (reaction!.type === '2') {
            post!.treatedReactions.dislikes--;
          } else if (reaction!.type === '3') {
            post!.treatedReactions.loves--;
          }
          reaction!.type = data.type;
          if (data.type === '1') {
            post!.treatedReactions.likes++;
          } else if (data.type === '2') {
            post!.treatedReactions.dislikes++;
          } else if (data.type === '3') {
            post!.treatedReactions.loves++;
          }
          post!.treatedReactions.userReaction = data.type;
        },
        error: (err: any) => {
          console.error('error', err);
        }
      });
    }
  }
}
