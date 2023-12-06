import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreationComponent } from './pages/post-creation/post-creation.component';

const routes: Routes = [
  { path: "create-post", component: PostCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
