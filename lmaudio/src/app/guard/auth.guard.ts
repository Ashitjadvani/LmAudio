import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate() {
    if (this.authService.checkUser()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
