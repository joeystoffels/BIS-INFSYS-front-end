import { Component, ViewChild } from '@angular/core';
import { KlantenService } from '../../../services/data/klanten.service';
import { Klant } from '../../../services/interfaces/klant';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent {
    public klanten: any = {};

    selectionChanged(e) {
        console.log(e.currentSelectedRowKeys[0]['emailadres']);
        
        
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    constructor(
      private klantenService: KlantenService
    ) {
        this.klantenService.getKlanten()
        .subscribe(
            res => this.klanten = new DataSource(res)
        );
    }
}
