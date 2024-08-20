import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CidadeFormComponent } from './componentes/cidade-form/cidade-form.component';
import { CidadeListaComponent } from './componentes/cidade-lista/cidade-lista.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './componentes/cliente-lista/cliente-lista.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Padrão
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // Login
  {path: 'entrar', component: LoginComponent},
  // Geral
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // Cidade
  {path: 'cidade-form', component: CidadeFormComponent, canActivate: [AuthGuard]},
  {path: 'cidade-form/:id', component: CidadeFormComponent, canActivate: [AuthGuard]},
  {path: 'cidade-lista', component: CidadeListaComponent, canActivate: [AuthGuard]},
  // Cliente
  {path: 'cliente-form', component: ClienteFormComponent, canActivate: [AuthGuard]},
  {path: 'cliente-form/:id', component: ClienteFormComponent, canActivate: [AuthGuard]},
  {path: 'cliente-lista', component: ClienteListaComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
