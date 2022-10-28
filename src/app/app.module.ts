import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './cards/header/header.component';
import { FooterComponent } from './cards/footer/footer.component';
import { ProjectComponent } from './containers/project/project.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';
import { ProductComponent } from './cards/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { NavbarComponent } from './cards/navbar/navbar.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ClientService} from "./services/client.service";
import { CarListComponent } from './components/car-list/car-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { RentListComponent } from './components/rent-list/rent-list.component';
import { RentFormComponent } from './components/rent-form/rent-form.component';
import {CarService} from "./services/car.service";
import {RentService} from "./services/rent.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ProductComponent,
    NavbarComponent,
    ClientListComponent,
    ClientFormComponent,
    CarListComponent,
    CarFormComponent,
    RentListComponent,
    RentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService, CarService, RentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
