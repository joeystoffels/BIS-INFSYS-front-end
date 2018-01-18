import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {

  public top10: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getTop10();
  }

  private getTop10() {
    this.rapportagesService.getTop10()
      .subscribe(
        res => this.top10 = res
      );
  }
}
