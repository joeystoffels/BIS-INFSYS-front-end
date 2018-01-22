import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Klant} from '../interfaces/klant'

@Injectable()
export class KlantService {

    private url = 'http://localhost:8080/klant/';
    private results: Klant[];

    // Resolve HTTP using the constructor
    constructor(private http: HttpClient) {
    }

    public getKlanten(): Observable<any> {
        // return an observable
        return this.http.get<Klant>(this.url)
            .map((data) => {
                return data;
            });
    }

    // getKlantOmzet( email: String): Observable<any> {
    //     const url = `${this.url}/${email}/omzet`;
    //     return this.http.get<KlantOmzet>(url)
    //         .map((data) => {
    //             return data;
    //         });
    // }

    // getKlantHistory( email: String): Observable<any> {
    //     const url = `${this.url}/${email}/history`;
    //     return this.http.get<KlantHistorie>(url)
    //         .map((data) => {
    //             return data;
    //         });
    // }
}