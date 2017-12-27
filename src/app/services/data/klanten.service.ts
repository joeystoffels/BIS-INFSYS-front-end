import { Injectable } from '@angular/core';
import { Klant } from '../interfaces/klant';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KlantenService {

    private url = 'http://localhost:8080/klant/';
    private results: Klant[];

    // Resolve HTTP using the constructor
    constructor(private http: HttpClient) {
    }

    getKlanten(): Observable<any> {
        // return an observable
        return this.http.get<Klant>(this.url)
            .map((data) => {
                return data;
            });
    }
}
