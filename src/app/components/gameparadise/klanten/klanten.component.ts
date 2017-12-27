import { Component, OnInit } from '@angular/core';
import { KlantenService } from '../../../services/data/klanten.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent {

    public klanten: any;
    public items = [];
    public itemCount = 0;

    constructor(
      private klantenService: KlantenService
    ) {
        this.klantenService.getKlanten()
        .subscribe(
            res => this.klanten = res
        );
    }
}
