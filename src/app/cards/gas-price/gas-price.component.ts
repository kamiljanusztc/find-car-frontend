import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as http from "http";
// import {GasPriceService} from "../../services/gas-price.service";
@Component({
  selector: 'app-gas-price',
  templateUrl: './gas-price.component.html',
  styleUrls: ['./gas-price.component.scss']
})
export class GasPriceComponent implements OnInit {
  gasPrices: any;

  constructor(private http : HttpClient) { }
  // constructor(private service:GasPriceService) { }

  title = 'api-angular';

  private url = 'https://api.collectapi.com/gasPrice/europeanCountries';

  // ngOnInit() {
  //   this.service.getGasPrices()
  //       .subscribe(response => {
  //         this.gasPrices = response;
  //       });
  // }

  // ngOnInit() {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'de683e7487mshdeb25bef4087c8fp100e6ejsn0035b5f30453',
  //       'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
  //     }
  //   };
  //
  //   fetch('https://gas-price.p.rapidapi.com/europeanCountries', options)
  //       .then(response => response.json())
  //       .then(response => console.log(response))
  //       .catch(err => console.error(err));
  //
  //   this.gasPrices = options;
  // }
  ngOnInit() {
    const options = {
      method: 'GET',
      headers: {
        'authorization': 'apikey 3zOI4SJBopUw7MSbgITXLc:1AFeTnLp0abtNPxOA2BroC',
        'content-type': 'application/json'
      }
    };

    fetch(this.url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    this.getGasPrice().subscribe((data)=>{
      console.log(data);
      this.gasPrices = data;
    })
  }

  getGasPrice() {
    return this.http.get(this.url);
  }

// showGasPrice() {
//   // this.getGasPrice()
//   //     .subscribe( response => {
//   //       this.gasPrices = response;
//   //     });
//
//   this.getGasPrice().subscribe((data)=>{
//     console.log(data);
//     this.gasPrices = data;
//   })
// }

}
