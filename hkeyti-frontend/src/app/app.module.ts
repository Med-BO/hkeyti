import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreationComponent } from './pages/post-creation/post-creation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostCategoriesComponent } from './pages/post-categories/post-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NsihetMjarrebComponent } from './pages/nsihet-mjarreb/nsihet-mjarreb.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreationComponent,
    NavbarComponent,
    MainLayoutComponent,
    PostCategoriesComponent,
    PostsComponent,
    LoginComponent,
    HomeComponent,
    NsihetMjarrebComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
