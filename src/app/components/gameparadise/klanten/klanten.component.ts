import { Component, OnInit } from '@angular/core';
import { KlantenService } from '../../../services/data/klanten.service';
import { DxDataGridModule } from 'devextreme-angular';
import { Klant } from '../../../services/interfaces/klant';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent {

    public klanten: any = {};

    constructor(
      private klantenService: KlantenService
    ) {
        this.klantenService.getKlanten()
        .subscribe(
            res => this.klanten = new DataSource(res)
        );
    }
}
