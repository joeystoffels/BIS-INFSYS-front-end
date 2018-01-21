import { Component, OnInit } from '@angular/core';
import { Opdracht7Service } from '../../services/opdracht7.service';
@Component({
  selector: 'app-opdracht7',
  templateUrl: './opdracht7.component.html',
  styleUrls: ['./opdracht7.component.css']
})
export class Opdracht7Component implements OnInit {

  public opdracht7a: any;
  public opdracht7b: any;
  public opdracht7c: any;
  public opdracht7d: any;
  public opdracht7e: any;

  constructor(private opdracht7service: Opdracht7Service) { }

  ngOnInit() {
    this.opdracht7service.getOpdracht7a().subscribe(
      res => this.opdracht7a = res
     );

     this.opdracht7service.getOpdracht7b().subscribe(
      res => this.opdracht7b = res
     );

     this.opdracht7service.getOpdracht7c().subscribe(
      res => this.opdracht7c = res
     );

     this.opdracht7service.getOpdracht7d().subscribe(
      res => this.opdracht7d = res
     );

     this.opdracht7service.getOpdracht7e().subscribe(
      res => this.opdracht7e = res
     );
  }

}

// import { Component, OnInit } from '@angular/core';
// import { KlantService } from '../../services/klant.service';

// @Component({
//   selector: 'app-klant-overzicht',
//   templateUrl: './klant-overzicht.component.html',
//   styleUrls: ['./klant-overzicht.component.css']
// })
// export class KlantOverzichtComponent implements OnInit {

//  public klanten: any;

//   constructor(private klantservice: KlantService) { }

//   ngOnInit() {
//     this.klantservice.getKlanten().subscribe(
//       res => this.klanten = res
//      );
//   }

// }
