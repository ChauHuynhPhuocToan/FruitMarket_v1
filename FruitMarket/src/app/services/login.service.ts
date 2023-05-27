import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any = null;
  loggedIn = new BehaviorSubject(this.user);
  constructor() { }

  isLoggedIn(): boolean {
    console.log(this.loggedIn);
    return true;
  }
}