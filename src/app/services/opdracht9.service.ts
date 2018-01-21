import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { opdracht_9a } from '../interfaces/opdracht_9a'
import { opdracht_9b } from '../interfaces/opdracht_9b'
import { opdracht_9c } from '../interfaces/opdracht_9c'
import { opdracht_9d } from '../interfaces/opdracht_9d'
import { opdracht_9e } from '../interfaces/opdracht_9e'
import { opdracht_9f } from '../interfaces/opdracht_9f'
import { opdracht_9g } from '../interfaces/opdracht_9g'

@Injectable()
export class Opdracht9Service {

  private url = 'http://localhost:8080/';
  private results9a: opdracht_9a[];
  private results9b: opdracht_9b[];
  private results9c: opdracht_9c[];
  private results9d: opdracht_9d[];
  private results9e: opdracht_9e[];
  private results9f: opdracht_9f[];
  private results9g: opdracht_9g[];


  constructor(private http: HttpClient) {
  }

  public getOpdracht9a(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9a>(this.url + '9a')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht9b(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9b>(this.url + '9b')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht9c(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9c>(this.url + '9c')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht9d(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9d>(this.url + '9d')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht9e(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9e>(this.url + '9e')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht9f(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9f>(this.url + '9f')
        .map((data) => {
            return data;
        });
      }

  public getOpdracht9g(): Observable<any> {
    // return an observable
    return this.http.get<opdracht_9g>(this.url + '9g')
        .map((data) => {
            return data;
        });
      }

}