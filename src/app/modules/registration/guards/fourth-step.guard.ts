import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FlagService } from '../services/flag.service';
import { Routing } from 'src/app/Routes/app-routes';
import { RegistrationRoutes } from '../Routes/registeration-routes';

@Injectable({
  providedIn: 'root'
})
export class FourthStepGuard implements CanActivate {
  constructor(private _FlagService: FlagService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let exist = localStorage.getItem('thirdStep')
    if (exist) {
      return true
    }
    else {
      this.router.navigate([`${Routing.registration.module}/${RegistrationRoutes.verify}`]);
      return false
    }
  }
}
