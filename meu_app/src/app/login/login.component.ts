import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }

  usuario: string;
  senha: string;

  logar() {
    if (this.usuario == "admin" && this.senha == "admin") {
      localStorage.setItem('usuario', this.usuario);
      localStorage.setItem('autenticado', '1');
      this.router.navigate(['/home']);
    } else {
      alert('Nome de utilizador e/ou senha inválidos! Tente novamente.')
    }
  }
}
