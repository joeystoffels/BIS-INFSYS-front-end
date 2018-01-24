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
        this.auth.setUsername('Medewerker');
        this.auth.setPassword('medewerker');
        break;
      }
      case 'FILIAALMANAGER': {
        this.auth.setUsername('Filiaalmanager');
        this.auth.setPassword('filiaalmanager');
        break;
      }
      case 'DIRECTIE': {
        this.auth.setUsername('Directie');
        this.auth.setPassword('directie');
        break;
      }
      case 'VOORRAADBEHEERDER': {
        this.auth.setUsername('Voorraadbeheerder');
        this.auth.setPassword('voorraadbeheerder');
        break;
      }
      case 'REPARATEUR': {
        this.auth.setUsername('Reparateur');
        this.auth.setPassword('reparateur');
        break;
      }
      case 'ADMIN': {
        this.auth.setUsername('Admin');
        this.auth.setPassword('admin');
        break;
      }
    }
  }
}
