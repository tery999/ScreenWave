import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviePageComponent } from './components/add-movie-page/add-movie-page.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { EditMoviePageComponent } from './components/edit-movie-page/edit-movie-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './Auth.guard';
import { LoggedGuard } from './Logged.guard';
import { MyMoviesComponent } from './components/profile/my-movies/my-movies.component';
import { MyWatchListComponent } from './components/profile/my-watch-list/my-watch-list.component';

const routes: Routes = [
  { path: "AddMovie" , component:AddMoviePageComponent, canActivate: [AuthGuard]},
  {path: "Catalog", component:CatalogComponent},
  {path: "Movies/:id", component: DetailsPageComponent},
  {path: "", component:HomeComponent},
  {path: "Edit/:id", component:EditMoviePageComponent, canActivate: [AuthGuard]},
  {path: "Register" , component: RegisterComponent, canActivate:[LoggedGuard]},
  {path: "Login", component: LoginComponent, canActivate:[LoggedGuard]},
  {path: "Profile", component: ProfileComponent, canActivate: [AuthGuard]} ,
  {path: "Profile/MyMovies", component: MyMoviesComponent, canActivate: [AuthGuard]} ,
  {path: "Profile/MyWatchList", component: MyWatchListComponent, canActivate: [AuthGuard]} ,
  {path: "**", component: NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
