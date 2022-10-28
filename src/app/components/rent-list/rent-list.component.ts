import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';
import {Rent} from "../../model/rent";

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  rents: Rent[];

  constructor(private rentService: RentService) {
  }

  ngOnInit() {
    this.rentService.findAll().subscribe(data => {
      this.rents = data;
    });
  }
}
