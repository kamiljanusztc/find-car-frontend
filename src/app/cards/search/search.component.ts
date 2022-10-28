import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() model: string;
  @Input() productionYear: string;
  @Input() gearBox: string;
  @Input() fuelType: string;
  @Input() engine: string;
  @Input() carPower: string;
  @Input() carStatus: string;

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.findAll().subscribe(data => {
      this.cars = data;
    });
  }

}
