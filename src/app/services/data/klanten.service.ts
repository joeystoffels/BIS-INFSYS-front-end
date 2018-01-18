import {Injectable} from '@angular/core';
import {Klant} from '../interfaces/klant';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {KlantHistorie} from '../interfaces/klant-historie';
import {KlantOmzet} from '../interfaces/klant-omzet';

@Injectable()
export class KlantenService {

  private url = 'http://localhost:8080/klant';
  private results: Klant[];

  // Resolve HTTP using the constructor
  constructor(private http: HttpClient) {
  }

  getKlanten(): Observable<any> {
    // return an observable
    const url = `${this.url}/`;
    return this.http.get<Klant>(url)
      .map((data) => {
        return data;
      });
  }

  getKlantOmzet(email: String): Observable<any> {
    const url = `${this.url}/${email}/omzet`;
    return this.http.get<KlantOmzet>(url)
      .map((data) => {
        return data;
      });
  }

  getKlantHistory(email: String): Observable<any> {
    const url = `${this.url}/${email}/historie`;
    return this.http.get<KlantHistorie>(url)
      .map((data) => {
        return data;
      });
  }
}
