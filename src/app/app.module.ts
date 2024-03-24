import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"

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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TokenInterceptorInterceptor } from './interceptors/token-interceptor.interceptor';

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
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
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
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
