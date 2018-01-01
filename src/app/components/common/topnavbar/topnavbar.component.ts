import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import {AuthService} from "../../../services/data/auth.service";
import {Router} from "@angular/router";
declare var jQuery:any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  constructor( private auth: AuthService, private router: Router) {
  }

  public logOut(){
    this.auth.logOut();
  }

}
