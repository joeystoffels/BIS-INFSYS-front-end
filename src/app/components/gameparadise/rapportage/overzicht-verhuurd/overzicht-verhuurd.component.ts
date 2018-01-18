import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-overzicht-verhuurd',
  templateUrl: './overzicht-verhuurd.component.html',
  styleUrls: ['./overzicht-verhuurd.component.css']
})
export class OverzichtVerhuurdComponent implements OnInit {

  public overzichtVerhuurd: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getOverzichtVerhuurd();
  }

  private getOverzichtVerhuurd() {
    this.rapportagesService.getOverzichtVerhuurd()
      .subscribe(
        res => this.overzichtVerhuurd = res
      );
  }
}
