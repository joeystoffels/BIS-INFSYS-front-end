import { Component, OnInit } from '@angular/core';
import { Opdracht8Service } from '../../services/opdracht8.service';
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

  constructor(private opdracht8service: Opdracht8Service) { }

  ngOnInit() {
    this.opdracht8service.getOpdracht8a().subscribe(
      res => this.opdracht8a = res
     );

     this.opdracht8service.getOpdracht8b().subscribe(
      res => this.opdracht8b = res
     );

     this.opdracht8service.getOpdracht8c().subscribe(
      res => this.opdracht8c = res
     );

     this.opdracht8service.getOpdracht8d().subscribe(
      res => this.opdracht8d = res
     );

     this.opdracht8service.getOpdracht8e().subscribe(
      res => this.opdracht8e = res
     );
  }

}