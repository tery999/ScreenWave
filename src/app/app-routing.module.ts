import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviePageComponent } from './components/add-movie-page/add-movie-page.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { EditMoviePageComponent } from './components/edit-movie-page/edit-movie-page.component';

const routes: Routes = [
  { path: "AddMovie" , component:AddMoviePageComponent},
  {path: "Catalog", component:CatalogComponent},
  {path: "Movies/:id", component: DetailsPageComponent},
  {path: "", component:HomeComponent},
  {path: "Edit/:id", component:EditMoviePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
