import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../services/car.service";
import {Router} from "@angular/router";

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

  manufacturer: String;
  gearbox: String;
  fuel: String;
  power:String;

  cars: Car[];
  filteredCars: Car[];

  constructor(private carService: CarService, public  router: Router) { }

  ngOnInit() {
    this.carService.findAll().subscribe(data => {
      this.cars = data;
      this.filteredCars = data;
    });
  }

  searchCars() {
    this.router.navigate(['/']);
    let filtered: Car[] = [];
    this.cars.forEach(car=>{
      if( this.manufacturerPredicate(car) && this.gearboxPredicate(car) && this.fuelPredicate(car) && this.powerPredicate(car)){
        filtered.push(car);
      }
    })
   this.filteredCars = filtered;
  }

  private manufacturerPredicate(car: Car) {
    return this.manufacturer ? car.model === this.manufacturer : true;
  }
  private gearboxPredicate(car: Car) {
    return this.gearbox ? car.gearBox === this.gearbox : true;
  }
  private fuelPredicate(car: Car) {
    return this.fuel ? car.fuelType === this.fuel : true;
  }
  private powerPredicate(car: Car) {
    // @ts-ignore
    return this.power ? parseInt(car.carPower) >= parseInt(this.power) : true;
  }

  resetFilters(){
    this.manufacturer = "";
    this.gearbox = "";
    this.fuel = "";
    this.power = "";
    this.filteredCars = this.cars;
  }
}
