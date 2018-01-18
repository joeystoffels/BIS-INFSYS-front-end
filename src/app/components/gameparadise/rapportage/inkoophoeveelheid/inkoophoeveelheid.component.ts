import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-inkoophoeveelheid',
  templateUrl: './inkoophoeveelheid.component.html',
  styleUrls: ['./inkoophoeveelheid.component.css']
})
export class InkoophoeveelheidComponent implements OnInit {

  public inkoophoeveelheid: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getInkoophoeveelheid();
  }

  private getInkoophoeveelheid() {
    this.rapportagesService.getInkoophoeveelheid()
      .subscribe(
        res => this.inkoophoeveelheid = res
      );
  }

}
