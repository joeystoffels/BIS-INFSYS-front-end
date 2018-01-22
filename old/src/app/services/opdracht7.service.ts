import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { opdracht_7a } from '../interfaces/opdracht_7a'
import { opdracht_7b } from '../interfaces/opdracht_7b'
import { opdracht_7c } from '../interfaces/opdracht_7c'
import { opdracht_7d } from '../interfaces/opdracht_7d'
import { opdracht_7e } from '../interfaces/opdracht_7e'

@Injectable()
export class Opdracht7Service {

  private url = 'http://localhost:8080/';
  private results7a: opdracht_7a[];
  private results7b: opdracht_7b[];
  private results7c: opdracht_7c[];
  private results7d: opdracht_7d[];
  private results7e: opdracht_7e[];


  constructor(private http: HttpClient) {
  }

  public getOpdracht7a(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_7a>(this.url + '7a')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht7b(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_7b>(this.url + '7b')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht7c(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_7c>(this.url + '7c')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht7d(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_7d>(this.url + '7d')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht7e(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_7e>(this.url + '7e')
        .map((data) => {
            return data;
        });
      }

}


// import { Injectable } from '@angular/core';
// import {HttpClient, HttpParams} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { Klant} from '../interfaces/klant'

// @Injectable()
// export class KlantService {

//     private url = 'http://localhost:8080/klant/';
//     private results: Klant[];

//     // Resolve HTTP using the constructor
//     constructor(private http: HttpClient) {
//     }

//     public getKlanten(): Observable<any> {
//         // return an observable
//         return this.http.get<Klant>(this.url)
//             .map((data) => {
//                 return data;
//             });
//     }