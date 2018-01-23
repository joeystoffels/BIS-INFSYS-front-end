import {Component, OnInit} from '@angular/core';
import {Opdracht8Service} from '../../services/opdracht8.service';
import {Klant} from "../../interfaces/klant";

@Component({
  selector: 'app-opdracht8',
  templateUrl: './opdracht8.component.html',
  styleUrls: ['./opdracht8.component.css']
})
export class Opdracht8Component implements OnInit {

  public opdracht8a: any;
  public opdracht8b: any;
  public opdracht8c: any;
  public opdracht8d: any;
  public opdracht8e: any;

  constructor(private opdracht8service: Opdracht8Service) {
  }

  selectionChanged(e) {
    const email = e.currentSelectedRowKeys[0]['emailadres'];
    //this.opdracht8a = e.selectedRowsData[0];

    //console.log(e);
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);

    this.getOpdracht8b(email);
    this.getOpdracht8c(email);
    this.getOpdracht8d(email);
    this.getOpdracht8e(email);
  }

  ngOnInit() {
    this.opdracht8service.getOpdracht8a().subscribe(
      res => this.opdracht8a = res
    );
  }

  private getOpdracht8b(email: String) {
    this.opdracht8service.getOpdracht8b(email).
    subscribe(
      res => this.opdracht8b = res
    );
  }

  private getOpdracht8c(email: String) {
    this.opdracht8service.getOpdracht8c(email).
    subscribe(
      res => this.opdracht8c = res
    );
  }

  private getOpdracht8d(email: String) {
    this.opdracht8service.getOpdracht8d(email).
    subscribe(
      res => this.opdracht8d = res
    );
  }

  private getOpdracht8e(email: String) {
    this.opdracht8service.getOpdracht8e(email).
    subscribe(
      res => this.opdracht8e = res
    );
  }

}
