import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  private _name: String;
  private _username: String;
  private _password: String;
  private _role: String;


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

  public getRole(): String {
    return this._role;
  }

  public setRole(value: String) {
    this._role = value;
  }

  public getName(): String {
    return this._name;
  }

  public setName(value: String) {
    this._name = value;
  }

  public logOut(){
    this.setUsername('');
    this.setPassword('');
    this.setRole('');
    this.router.navigate(['/login']);
  }
}
