// O component.ts é usado para evitar de declarar arquivos externos ao html, como pelas tags link e script
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

  // templateUrl: './login.component.html'--> Caminho para administrar o html
  // styleUrls: ['./login.component.css'] --> Caminho para administrar o css
  // selector: 'app-login' --> Seletor que permite a administração e renderiza no login.component.html 
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
