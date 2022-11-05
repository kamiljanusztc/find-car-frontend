import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';
import {Rent} from "../../model/rent";
import {Car} from "../../model/car";
import {Client} from "../../model/client";

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  rents: Rent[];
  isEnabled: boolean;

  constructor(private rentService: RentService) {
    this.isEnabled = true;
  }

  ngOnInit() {
    this.rentService.findAll().subscribe(data => {
      this.rents = data;
    });
  }

  removeRent(rent: Rent) {
    const index = this.rents.indexOf(rent);
    this.rents.splice(index, 1);
  }

  editRent() {
    this.isEnabled = false;
  }

  saveRent(rent: Rent) {
    const index = this.rents.indexOf(rent);
    this.rents.splice(index, 1, {id: (index + 1), dateStart: rent.dateStart, dateEnd: rent.dateEnd, rentStatus: rent.rentStatus, cost: rent.cost, isPaid: rent.isPaid, client: rent.client, car: rent.car });
    this.isEnabled = true;
  }
}
