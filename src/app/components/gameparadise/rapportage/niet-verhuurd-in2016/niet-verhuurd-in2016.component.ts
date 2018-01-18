import { Component, OnInit } from '@angular/core';
import {RapportagesService} from "../../../../services/data/rapportages.service";

@Component({
  selector: 'app-niet-verhuurd-in2016',
  templateUrl: './niet-verhuurd-in2016.component.html',
  styleUrls: ['./niet-verhuurd-in2016.component.css']
})
export class NietVerhuurdIn2016Component implements OnInit {

  public nietVerhuurdIn2016: any;

  constructor( private rapportagesService: RapportagesService) { }

  ngOnInit() {
    this.getNietVerhuurdIn2016();
  }

  private getNietVerhuurdIn2016() {
    this.rapportagesService.getNietVerhuurdIn2016()
      .subscribe(
        res => this.nietVerhuurdIn2016 = res
      );
  }
}
