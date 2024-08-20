import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private router: Router,
    private loginService: LoginService
    ){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
    const autenticacao = this.loginService.is_authenticated;
    
    if(autenticacao){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}