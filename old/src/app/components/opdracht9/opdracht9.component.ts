import { Component, OnInit } from '@angular/core';
import { Opdracht9Service } from '../../services/opdracht9.service';
@Component({
  selector: 'app-opdracht9',
  templateUrl: './opdracht9.component.html',
  styleUrls: ['./opdracht9.component.css']
})
export class Opdracht9Component implements OnInit {

  public opdracht9a: any;
  public opdracht9b: any;
  public opdracht9c: any;
  public opdracht9d: any;
  public opdracht9e: any;
  public opdracht9f: any;
  public opdracht9g: any;

  constructor(private opdracht9service: Opdracht9Service) { }

  ngOnInit() {
    this.opdracht9service.getOpdracht9a().subscribe(
      res => this.opdracht9a = res
     );

     this.opdracht9service.getOpdracht9b().subscribe(
      res => this.opdracht9b = res
     );

     this.opdracht9service.getOpdracht9c().subscribe(
      res => this.opdracht9c = res
     );

     this.opdracht9service.getOpdracht9d().subscribe(
      res => this.opdracht9d = res
     );

     this.opdracht9service.getOpdracht9e().subscribe(
      res => this.opdracht9e = res
     );

     this.opdracht9service.getOpdracht9f().subscribe(
      res => this.opdracht9f = res
     );

     this.opdracht9service.getOpdracht9g().subscribe(
      res => this.opdracht9g = res
     );
  }

}