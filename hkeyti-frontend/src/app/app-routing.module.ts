import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreationComponent } from './pages/post-creation/post-creation.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { PostCategoriesComponent } from './pages/post-categories/post-categories.component';
import { PostsComponent } from './pages/posts/posts.component';

// The route names should in french
const routes: Routes = [
  { path: "hkeyti", component: MainLayoutComponent, children: [
      { path: "creer-publication", component: PostCreationComponent },
      { path: "publications", children: [
          { path: "categories", component: PostCategoriesComponent },
          { path: "categorie/:categoryId", component: PostsComponent },
        ] 
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
