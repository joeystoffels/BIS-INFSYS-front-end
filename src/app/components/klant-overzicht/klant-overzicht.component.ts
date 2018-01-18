import { Component, OnInit } from '@angular/core';
import { KlantService } from '../../services/klant.service';

@Component({
  selector: 'app-klant-overzicht',
  templateUrl: './klant-overzicht.component.html',
  styleUrls: ['./klant-overzicht.component.css']
})
export class KlantOverzichtComponent implements OnInit {

 public klanten: any;

  constructor(private klantservice: KlantService) { }

  ngOnInit() {
    this.klantservice.getKlanten().subscribe(
      res => this.klanten = res
     );
  }

}
