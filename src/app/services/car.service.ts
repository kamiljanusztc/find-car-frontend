import { Injectable } from '@angular/core';
import {Car} from "../model/car";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CarService {

  private carsUrl: string;
  // private newCarUrl: string;

  constructor(private http: HttpClient) {
    this.carsUrl = 'http://localhost:8080/api/v1/cars';
    // this.newCarUrl = 'http://localhost:8080/api/v1/cars/newCar';
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  public save(car: Car) {
    return this.http.post<Car>(this.carsUrl, car);
  }

  // public save(car: Car) {
  //   return this.http.post<Car>(this.newCarUrl, car);
  // }
}
