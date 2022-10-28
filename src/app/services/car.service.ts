import { Injectable } from '@angular/core';
import {Car} from "../model/car";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CarService {

  private carsUrl: string;

  constructor(private http: HttpClient) {
    this.carsUrl = 'http://localhost:8080/api/v1/cars';
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  public save(car: Car) {
    return this.http.post<Car>(this.carsUrl, car);
  }
}
