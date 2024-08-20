import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  is_authenticated(): boolean {
    const authenticated = localStorage.getItem('autenticado');

    if (authenticated) {
      return true;
    } else {
      return false;
    }
  }
}
