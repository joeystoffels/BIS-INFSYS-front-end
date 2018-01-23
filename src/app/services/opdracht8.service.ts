import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { opdracht_8a } from '../interfaces/opdracht_8a'
import { opdracht_8b } from '../interfaces/opdracht_8b'
import { opdracht_8c } from '../interfaces/opdracht_8c'
import { opdracht_8d } from '../interfaces/opdracht_8d'
import { opdracht_8e } from '../interfaces/opdracht_8e'

@Injectable()
export class Opdracht8Service {

  private url = 'http://localhost:8080/';
  private results8a: opdracht_8a[];
  private results8b: opdracht_8b[];
  private results8c: opdracht_8c[];
  private results8d: opdracht_8d[];
  private results8e: opdracht_8e[];


  constructor(private http: HttpClient) {
  }

  public getOpdracht8a(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_8a>(this.url + '8a')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht8b(email: String): Observable<any> {
    // return an observable
    return this.http.get<opdracht_8b>(this.url + '8b/' + email + '/')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht8c(email: String): Observable<any> {
    // return an observable
    return this.http.get<opdracht_8c>(this.url + '8c/' + email + '/')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht8d(email: String): Observable<any> {
    // return an observable
    return this.http.get<opdracht_8d>(this.url + '8d/' + email + '/')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht8e(email: String): Observable<any> {
    // return an observable
    return this.http.get<opdracht_8e>(this.url + '8e/' + email + '/')
        .map((data) => {
            return data;
        });
      }

}
