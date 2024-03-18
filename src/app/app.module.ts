import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddMoviePageComponent } from './components/add-movie-page/add-movie-page.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieListComponentComponent } from './components/catalog/movie-list-component/movie-list-component.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditMoviePageComponent } from './components/edit-movie-page/edit-movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AddMoviePageComponent,
    CatalogComponent,
    MovieListComponentComponent,
    DetailsPageComponent,
    EditMoviePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
