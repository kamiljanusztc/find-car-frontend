// import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GasPriceService {
//
//     // private url = 'https://gas-price.p.rapidapi.com/europeanCountries';
//     private url = 'https://api.collectapi.com/gasPrice/europeanCountries';
//
//   constructor(private httpClient: HttpClient) { }
//
//     getGasPrices(){
//
//         const url = 'https://api.collectapi.com/gasPrice/europeanCountries';
//         const key = '3zOI4SJBopUw7MSbgITXLc:1AFeTnLp0abtNPxOA2BroC';
//         const contentType = 'application/json';
//         const headers = new HttpHeaders({'authorization': key, 'content-type': contentType});
//
//         return this.httpClient.get(this.url, {headers: headers});
//         //
//         // const params = new HttpParams()
//         //     .set('authorization', 'apikey 3zOI4SJBopUw7MSbgITXLc:1AFeTnLp0abtNPxOA2BroC')
//         //     .set('application/json', 'application/json')
//         //     .set('limit', '5');
//         // return this.httpClient.get(this.url, { params });
//         // console.log(this.url)
//         // console.log(params)
//
//     }
//
//   // getGasPrices(){
//   //
//   //     const url = 'https://gas-price.p.rapidapi.com/europeanCountries';
//   //     const key = 'de683e7487mshdeb25bef4087c8fp100e6ejsn0035b5f30453';
//   //     const host = 'gas-price.p.rapidapi.com';
//   //     const headers = new HttpHeaders({'X-RapidAPI-Key': key, 'X-RapidAPI-Host': host});
//   //
//   //   return this.httpClient.get(url, {headers: headers});
//   //
//   //     // const params = new HttpParams()
//   //     //     .set('X-RapidAPI-Key', 'de683e7487mshdeb25bef4087c8fp100e6ejsn0035b5f30453')
//   //     //     .set('X-RapidAPI-Host', 'gas-price.p.rapidapi.com');
//   //   // return this.httpClient.get(this.url, { params });
//   //   // console.log(this.url)
//   //   // console.log(params)
//   //
//   // }
// }
//
//
// // const params = new HttpParams()
// //     .set('api_key', 'de683e7487mshdeb25bef4087c8fp100e6ejsn0035b5f30453')
// //     .set('api_host', 'gas-price.p.rapidapi.com')
// //     .set('limit', '25')
// //     .set('offset', '0')
// //     .set('rating', 'G')
// //     .set('lang', 'en');