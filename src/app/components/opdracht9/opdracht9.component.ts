import {Component, OnInit} from '@angular/core';
import {Opdracht9Service} from '../../services/opdracht9.service';
import {AuthService} from '../../services/auth.service';

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

  opdracht9aauth:string[] = new Array("Medewerker", "Filiaalmanager", "Directie", "Voorraadbeheerder", "Admin");
  opdracht9bauth:string[] = new Array("Voorraadbeheerder", "Filiaalmanager", "Directie", "Admin");
  opdracht9cauth:string[] = new Array("Directie", "Admin");
  opdracht9dauth:string[] = new Array("Voorraadbeheerder", "Filiaalmanager", "Directie", "Admin");
  opdracht9eauth:string[] = new Array("Voorraadbeheerder", "Medewerker", "Reparateur", "Filiaalmanager", "Admin");
  opdracht9fauth:string[] = new Array("Filiaalmanager", "Directie", "Admin");
  opdracht9gauth:string[] = new Array("Directie", "Admin");

  constructor(private opdracht9service: Opdracht9Service, private authService: AuthService) {}

  ngOnInit() {
    if (this.opdracht9aauth.includes(this.authService.getUsername().toString())) {
      console.log(this.authService.getUsername());
      this.opdracht9service.getOpdracht9a().subscribe(
        res => this.opdracht9a = res
      );
    }

    if (this.opdracht9bauth.includes(this.authService.getUsername().toString())) {
      this.opdracht9service.getOpdracht9b().subscribe(
        res => this.opdracht9b = res
      );
    }

    if (this.opdracht9cauth.includes(this.authService.getUsername().toString())) {
      this.opdracht9service.getOpdracht9c().subscribe(
        res => this.opdracht9c = res
      );
    }

    if (this.opdracht9dauth.includes(this.authService.getUsername().toString())) {
      this.opdracht9service.getOpdracht9d().subscribe(
        res => this.opdracht9d = res
      );
    }

    if (this.opdracht9eauth.includes(this.authService.getUsername().toString())) {
      this.opdracht9service.getOpdracht9e().subscribe(
        res => this.opdracht9e = res
      );
    }

    if (this.opdracht9fauth.includes(this.authService.getUsername().toString())) {
      this.opdracht9service.getOpdracht9f().subscribe(
        res => this.opdracht9f = res
      );
    }

    if (this.opdracht9gauth.includes(this.authService.getUsername().toString())) {
      this.opdracht9service.getOpdracht9g().subscribe(
        res => this.opdracht9g = res
      );
    }
  }
}
