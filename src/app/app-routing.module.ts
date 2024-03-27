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

const routes: Routes = [
  { path: "AddMovie" , component:AddMoviePageComponent, canActivate: [AuthGuard]},
  {path: "Catalog", component:CatalogComponent},
  {path: "Movies/:id", component: DetailsPageComponent},
  {path: "", component:HomeComponent},
  {path: "Edit/:id", component:EditMoviePageComponent, canActivate: [AuthGuard]},
  {path: "Register" , component: RegisterComponent},
  {path: "Login", component: LoginComponent},
  {path: "Profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path: "**", component: NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
