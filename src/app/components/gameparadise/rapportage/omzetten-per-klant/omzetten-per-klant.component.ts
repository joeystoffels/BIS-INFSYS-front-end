import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-omzetten-per-klant',
  templateUrl: './omzetten-per-klant.component.html',
  styleUrls: ['./omzetten-per-klant.component.css']
})
export class OmzettenPerKlantComponent implements OnInit {

  public omzettenPerKlant: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getOmzettenPerKlant();
  }

  private getOmzettenPerKlant() {
    this.rapportagesService.getOmzettenPerKlant()
      .subscribe(
        res => this.omzettenPerKlant = res
      );
  }
}
