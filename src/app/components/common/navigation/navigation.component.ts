import { Component } from '@angular/core';
import {Router} from '@angular/router';
import 'jquery-slimscroll';
import {AuthService} from "../../../services/data/auth.service";

declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent {

  public name: String;
  public role: String;

  constructor(private router: Router, private auth:AuthService) {
    this.name = this.auth.getName();
    this.role = this.auth.getRole();

  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }

  public show(page:String){
    var array = new Array();
    switch(page){
      case 'A': {
        array.push('medewerker');
        array.push('filiaalmanager');
        array.push('directie');
        array.push('voorraadbeheerder');
        array.push('superadmin');
        break;
      }
      case 'B': {
        array.push('filiaalmanager');
        array.push('directie');
        array.push('voorraadbeheerder');
        array.push('superadmin');
        break;
      }
      case 'C': {
        array.push('directie');
        array.push('superadmin');
        break;
      }
      case 'D': {
        array.push('filiaalmanager');
        array.push('directie');
        array.push('voorraadbeheerder');
        array.push('superadmin');
        break;
      }
      case 'E': {
        array.push('medewerker');
        array.push('filiaalmanager');
        array.push('voorraadbeheerder');
        array.push('reparateur');
        array.push('superadmin');
        break;
      }
      case 'F': {
        array.push('filiaalmanager');
        array.push('directie');
        array.push('superadmin');
        break;
      }
      case 'G': {
        array.push('directie');
        array.push('superadmin');
        break;
      }
    }
    return array.indexOf(this.auth.getRole()) > -1
  }


}
