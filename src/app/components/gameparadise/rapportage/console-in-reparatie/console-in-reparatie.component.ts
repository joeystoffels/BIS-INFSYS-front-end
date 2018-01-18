import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-console-in-reparatie',
  templateUrl: './console-in-reparatie.component.html',
  styleUrls: ['./console-in-reparatie.component.css']
})
export class ConsoleInReparatieComponent implements OnInit {

  public consolesInReparatie: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getConsolesInReparatie();
  }

  private getConsolesInReparatie() {
    this.rapportagesService.getConsolesInReparatie()
      .subscribe(
        res => this.consolesInReparatie = res
      );
  }
}
