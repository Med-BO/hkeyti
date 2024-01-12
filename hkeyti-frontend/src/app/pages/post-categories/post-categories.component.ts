import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/data/services/publications-service.service';
import { Categorie } from 'src/app/data/models/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-categories',
  templateUrl: './post-categories.component.html',
  styleUrls: ['./post-categories.component.scss']
})
export class PostCategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  loader: boolean = true;

  constructor(private publicationsService: PublicationsService, private router: Router) { }

  ngOnInit(): void {
    this.publicationsService.getAllCategories()
    .subscribe(
      {
        next: (data: any) => {
          this.loader = false;
          data.forEach((element: any) => {
            this.categories.push(new Categorie().deserialize(element));
          });
        },
        error: (err: any) => {
          console.error('error', err); 
          this.loader = false;
        },
        complete: () => { }
      }
    );
  }

  goToCategory(categoryId: number) {
    this.router.navigate(['/hkeyti/publications/categorie', categoryId]);
  }
}
