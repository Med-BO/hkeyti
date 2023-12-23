import { Component, OnInit } from '@angular/core';
import { PublicationsServiceService } from 'src/app/services/publications-service.service';
import { Categorie } from 'src/app/data/models/categorie.model';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-post-categories',
  templateUrl: './post-categories.component.html',
  styleUrls: ['./post-categories.component.scss']
})
export class PostCategoriesComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(private publicationsService: PublicationsServiceService) { }

  ngOnInit(): void {
    this.publicationsService.getAllCategories()
    .subscribe(
      {
        next: (data: any) => {
          data.forEach((element: any) => {
            this.categories.push(new Categorie().deserialize(element));
          });
        },
        error: (err: any) => {console.error('error', err);},
        complete: () => { }
      }
    );
  }

}
