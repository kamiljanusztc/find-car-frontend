import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from "./components/client-list/client-list.component";
import { ClientFormComponent } from "./components/client-form/client-form.component";
import {CarListComponent} from "./components/car-list/car-list.component";
import {CarFormComponent} from "./components/car-form/car-form.component";
import {RentListComponent} from "./components/rent-list/rent-list.component";
import {RentFormComponent} from "./components/rent-form/rent-form.component";
import {CommentsComponent} from "./cards/comments/comments.component";
import {ProjectComponent} from "./containers/project/project.component";

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'createclient', component: ClientFormComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'createcar', component: CarFormComponent },
  { path: 'rents', component: RentListComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'home', component: ProjectComponent },
  { path: 'createrent', component: RentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
