import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FlagService } from '../services/flag.service';
import { Routing } from 'src/app/Routes/app-routes';
import { RegistrationRoutes } from '../Routes/registeration-routes';

@Injectable({
  providedIn: 'root'
})
export class SecondStepGuard implements CanActivate {
  constructor(private _FlagService: FlagService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let exist = localStorage.getItem('firstStep')
    if (exist) {
      return true
    }
    this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.registration}`])
    return false
  }

}
