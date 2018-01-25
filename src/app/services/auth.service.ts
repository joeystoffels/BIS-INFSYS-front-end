import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private router: Router) { this._username = 'Log in'}

  private _username: String;
  private _password: String;

  public getUsername(): String {
    return this._username;
  }

  public setUsername(value: String) {
    this._username = value;
  }

  public getPassword(): String {
    return this._password;
  }

  public setPassword(value: String) {
    this._password = value;
  }

  public logOut(){
    this.setUsername('Log in');
    this.setPassword('');
    this.router.navigate(['/opdracht8']);
  }
}
