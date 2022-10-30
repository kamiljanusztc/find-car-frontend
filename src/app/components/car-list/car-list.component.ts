import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  @Input() model: string;
  @Input() productionYear: string;
  @Input() gearBox: string;
  @Input() fuelType: string;
  @Input() engine: string;
  @Input() carPower: string;
  @Input() carStatus: string;

  cars: Car[];
  modelValue: string;

  constructor(private carService: CarService) {
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

  updateCar(car: Car) {
    const index = this.cars.indexOf(car);
    // this.cars.splice(index, 1, {id: (index + 1).toString(), model: 'Updated model', productionYear: 'Updated year', gearBox: 'Updated gearbox', fuelType: 'Updated petrol', engine: 'Updated engine', carPower: 'Updated power', carStatus: 'Updated status' });
    this.cars.splice(index, 1, {id: (index + 1).toString(), model: this.modelValue[0], productionYear: 'Updated year', gearBox: 'Updated gearbox', fuelType: 'Updated petrol', engine: 'Updated engine', carPower: 'Updated power', carStatus: 'Updated status' });

  }

}
