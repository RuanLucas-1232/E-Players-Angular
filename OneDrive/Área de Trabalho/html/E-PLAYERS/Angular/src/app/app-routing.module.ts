import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/view/login/login.component'
// import {NomeDaClasse} from 'Caminho do modulo (login.component.ts), que é o administrador dos arquivos htnl, css e javascript (typescript)'
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  // {path:"" --> chama a rota da home sempre que não houver especificação na url},
  {path:"", component: HomeComponent},
  {path: 'login', component: LoginComponent}
  // {path: 'nome do endpoint, ou rota url', component: 'classe que representa o componente'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
