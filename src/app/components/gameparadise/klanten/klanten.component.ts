import { Component, ViewChild } from '@angular/core';
import { KlantenService } from '../../../services/data/klanten.service';
import { Klant } from '../../../services/interfaces/klant';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent implements OnInit {
    public klant: Klant;
    public klanten: any = {};
    public klantOmzet: any = {};
    public klantHistory: any = {};

    selectionChanged(e) {
        const email = e.currentSelectedRowKeys[0]['emailadres'];
        this.klant = e.selectedRowsData[0];

        console.log(e);
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);

        this.getHistory(email);
        this.getOmzet(email);
    }

    constructor(
      private klantenService: KlantenService
    ) {
    }

    ngOnInit() {
        this.getKlanten();
    }

    private getKlanten() {
        this.klantenService.getKlanten()
        .subscribe(
            res => this.klanten = new DataSource(res)
        );
    }

    private getOmzet( email: String) {
        this.klantenService.getKlantOmzet(email)
        .subscribe(
            res => this.klantOmzet = res
        );
    }

    private getHistory( email: String) {
        this.klantenService.getKlantHistory(email)
        .subscribe(
            res => this.klantHistory = res
        );
    }
}
