import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../services/car.service";
import {Rent} from "../../model/rent";
import {RentService} from "../../services/rent.service";

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})
export class RentFormComponent {

  rent: Rent;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private rentService: RentService) {
    this.rent = new Rent();
  }

  onSubmit() {
    this.rentService.save(this.rent).subscribe(result => this.gotoRentList());
  }

  gotoRentList() {
    this.router.navigate(['/rents']);
  }

}
