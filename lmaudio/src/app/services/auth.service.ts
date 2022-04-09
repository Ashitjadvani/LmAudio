import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { baseUrl } from "../config/api";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = baseUrl + '/login'
  registerUrl = baseUrl + '/register'
  subject = new Subject();

  constructor(private http:HttpClient) { }

  register(userData){
    return this.http.post(this.registerUrl,userData)
  }
  login(creds) {
    return this.http.post(this.loginUrl, creds)
      .pipe(
        map(data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.subject.next(this.checkUser());
          return data
        })
      )
  }
  logout() {
    localStorage.removeItem('user');
    this.subject.next(this.checkUser());
  }
  checkUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  getCurrentUserStatus() {
    return this.subject.asObservable();
  }
}
