import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-omzetten',
  templateUrl: './omzetten.component.html',
  styleUrls: ['./omzetten.component.css']
})
export class OmzettenComponent implements OnInit {

  public omzetten: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getOmzetten();
  }

  private getOmzetten() {
    this.rapportagesService.getOmzetten()
      .subscribe(
        res => this.omzetten = res
      );
  }

}
