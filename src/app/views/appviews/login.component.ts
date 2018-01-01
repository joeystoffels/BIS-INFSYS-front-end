import { Component } from '@angular/core';
import {AuthService} from "../../services/data/auth.service";

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
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
          this.auth.setUsername('medewerker');
          this.auth.setPassword('medewerker');
          this.auth.setRole('medewerker');
        break;
      }
      case 'FILIAALMANAGER': {
        this.auth.setName('J. Stoffels');
        this.auth.setUsername('filiaalmanager');
        this.auth.setPassword('filiaalmanager');
        this.auth.setRole('filiaalmanager');
        break;
      }
      case 'DIRECTIE': {
        this.auth.setName('N. Hartjes');
        this.auth.setUsername('directie');
        this.auth.setPassword('directie');
        this.auth.setRole('directie');
        break;
      }
      case 'VOORRAADBEHEERDER': {
        this.auth.setName('J. Order');
        this.auth.setUsername('voorraadbeheerder');
        this.auth.setPassword('voorraadbeheerder');
        this.auth.setRole('voorraadbeheerder');
        break;
      }
      case 'REPARATEUR': {
        this.auth.setName('F. Ixnix');
        this.auth.setUsername('reparateur');
        this.auth.setPassword('reparateur');
        this.auth.setRole('reparateur');
        break;
      }
      case 'SUPERAMIN': {
        this.auth.setName('P. Cornelissen');
        this.auth.setUsername('superadmin');
        this.auth.setPassword('superadmin');
        this.auth.setRole('superadmin');
        break;
      }
    }
  }
}
