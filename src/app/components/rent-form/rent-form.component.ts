import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Rent} from "../../model/rent";
import {RentService} from "../../services/rent.service";
import {Car} from "../../model/car";
import {Client} from "../../model/client";

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})
export class RentFormComponent {

  rent: Rent;
  carId:string | null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private rentService: RentService) {
    this.rent = new Rent();
    this.rent.rentStatus = "IN_PROGRESS";
    this.rent.id = 0;
    this.carId = this.route.snapshot.paramMap.get('carId');
    this.rent.cost = this.getCarCost(300,900);
    if(this.carId != null){
      let car = new Car();
      let client = new Client();
      car.id = this.carId;
      client.id = 1;
      this.rent.car = car;
      this.rent.client =client
    }else{
      let car = new Car();
      let client = new Client();
      car.id = "1";
      client.id = 1;
      this.rent.car = car;
      this.rent.client =client
    }
  }

  onSubmit() {
    this.rentService.save(this.rent).subscribe(result => this.gotoRentList());
  }

  gotoRentList() {
    this.router.navigate(['/rents']);
  }

  getCarCost(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
