import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Rent} from "../model/rent";
import {Observable} from "rxjs";

@Injectable()
export class RentService {

  private rentsUrl: string;

  constructor(private http: HttpClient) {
    this.rentsUrl = 'http://localhost:8080/api/v1/rents';
  }

  public findAll(): Observable<Rent[]> {
    return this.http.get<Rent[]>(this.rentsUrl);
  }

  public save(rent: Rent) {
    return this.http.post<Rent>(this.rentsUrl+"/newRent", rent);
  }
}
