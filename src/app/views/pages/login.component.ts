import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  public username: String = '';
  public password: String = '';

  constructor(private auth: AuthService) {
  }

  public login(name: String){
    switch (name){
      case 'MEDEWERKER': {
        this.auth.setName('M. De Geus');
        this.auth.setUsername('Medewerker');
        this.auth.setPassword('medewerker');
        this.auth.setRole('medewerker');
        break;
      }
      case 'FILIAALMANAGER': {
        this.auth.setName('J. Stoffels');
        this.auth.setUsername('Filiaalmanager');
        this.auth.setPassword('filiaalmanager');
        this.auth.setRole('filiaalmanager');
        break;
      }
      case 'DIRECTIE': {
        this.auth.setName('N. Hartjes');
        this.auth.setUsername('Directie');
        this.auth.setPassword('directie');
        this.auth.setRole('directie');
        break;
      }
      case 'VOORRAADBEHEERDER': {
        this.auth.setName('J. Order');
        this.auth.setUsername('Voorraadbeheerder');
        this.auth.setPassword('voorraadbeheerder');
        this.auth.setRole('voorraadbeheerder');
        break;
      }
      case 'REPARATEUR': {
        this.auth.setName('F. Ixnix');
        this.auth.setUsername('Reparateur');
        this.auth.setPassword('reparateur');
        this.auth.setRole('reparateur');
        break;
      }
      case 'ADMIN': {
        this.auth.setName('P. Cornelissen');
        this.auth.setUsername('Admin');
        this.auth.setPassword('admin');
        this.auth.setRole('admin');
        break;
      }
    }
  }
}
