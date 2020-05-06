import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenService} from './token.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userData = this.tokenService.getUser();
    if (userData) {
      const user = JSON.parse(userData) as User;
      if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
        this.router.navigateByUrl('/login');
        return false;
      }
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
