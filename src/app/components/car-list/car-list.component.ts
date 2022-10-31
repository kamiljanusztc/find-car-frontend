import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  @Input() model: string;
  @Input() productionYear: string;
  @Input() gearBox: string;
  @Input() fuelType: string;
  @Input() engine: string;
  @Input() carPower: string;
  @Input() carStatus: string;

  cars: Car[];
  modelValue: string;
  isEnabled: boolean;

  constructor(private carService: CarService) {
    this.isEnabled = true;
  }

  ngOnInit() {
    this.carService.findAll().subscribe(data => {
      this.cars = data;
    });
  }

  removeCar(car: Car) {
    const index = this.cars.indexOf(car);
    this.cars.splice(index, 1);
  }

  editCar() {
    this.isEnabled = false;
  }

  saveCar(car: Car) {
    const index = this.cars.indexOf(car);
    this.cars.splice(index, 1, {id: (index + 1).toString(), model: car.model, productionYear: car.productionYear, gearBox: car.gearBox, fuelType: car.fuelType, engine: car.engine, carPower: car.carPower, carStatus: car.carStatus });
    this.isEnabled = true;
  }
}
