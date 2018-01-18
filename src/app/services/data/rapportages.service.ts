import { Injectable } from '@angular/core';
import {Inkoophoeveelheid} from "../interfaces/inkoophoeveelheid";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Reparatie} from "../interfaces/reparatie";
import {KlantOmzet} from "../interfaces/klant-omzet";
import {Top10} from "../interfaces/top10";
import {KlantOmzetPerMaand} from "../interfaces/klant-omzet-per-maand";
import {Klant} from "../interfaces/klant";

@Injectable()
export class RapportagesService {

  private url = 'http://localhost:8080/rapport';
  private resultsInkoophoeveelheid: Inkoophoeveelheid[];

  // Resolve HTTP using the constructor
  constructor(private http: HttpClient) {
  }

  // A. Overzicht verhuurd
  getOverzichtVerhuurd(): Observable<any> {
    // return an observable
    return this.http.get<Klant>(this.url + "/overzicht-momenteel-verhuurd")
      .map((data) => {
        return data;
      });
  }

  // B. Niet verhuurd in 2016
  getNietVerhuurdIn2016(): Observable<any> {
    // return an observable
    return this.http.get<Inkoophoeveelheid>(this.url + "/niet-verhuurd-in-2016")
      .map((data) => {
        return data;
      });
  }

  // C. Omzetten
  getOmzetten(): Observable<any> {
    // return an observable
    return this.http.get<KlantOmzetPerMaand>(this.url + "/omzetten-van-iedere-maand")
      .map((data) => {
        return data;
      });
  }

  // D. Top 10 polulairste spellen
  getTop10(): Observable<any> {
    // return an observable
    return this.http.get<Top10>(this.url + "/top-10-verhuurd")
      .map((data) => {
        return data;
      });
  }

  // E. Consoles in reparatie
  getConsolesInReparatie(): Observable<any> {
    // return an observable
    return this.http.get<Reparatie>(this.url + "/consoles-in-reparatie")
      .map((data) => {
        return data;
      });
  }

  // F. Omzetten per klant
  getOmzettenPerKlant(): Observable<any> {
    return this.http.get<KlantOmzet>(this.url + "/omzetten-per-klant-per-jaar")
      .map((data) => {
        return data;
      });
  }

  // G. Inkoophoeveelheid
  getInkoophoeveelheid(): Observable<any> {
    return this.http.get<Inkoophoeveelheid>(this.url + "/inkoophoeveelheid")
      .map((data) => {
        return data;
      });
  }
}















