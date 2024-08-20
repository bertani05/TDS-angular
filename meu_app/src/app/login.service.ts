import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { } 

  estaAutenticado(): boolean{    
    const autenticado = window.localStorage.getItem('autenticado');
    if(autenticado){
      return true;
    }else{
      return false;
    }    
  }

}