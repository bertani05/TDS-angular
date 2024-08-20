import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { CidadeListaComponent } from './componentes/cidade-lista/cidade-lista.component';
import { CidadeFormComponent } from './componentes/cidade-form/cidade-form.component';
import { ClienteListaComponent } from './componentes/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CidadeListaComponent,
    CidadeFormComponent,
    ClienteListaComponent,
    ClienteFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
