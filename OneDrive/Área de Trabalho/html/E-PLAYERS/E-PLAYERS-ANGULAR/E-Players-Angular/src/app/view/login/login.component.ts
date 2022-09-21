import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  faArrowLeft = faArrowLeft;
  faEnvelope = faEnvelope;
  faLock = faLock;

  userModel = new User()

  mensagem: any

  //variável private router: Router, é usada para redirecionar o usuário 
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  validaLogin(): boolean {
    
    let blackList = ['SELECT', 'FROM', ' ', 'DATABASE', 'OR', '--', 'DROP', ';', '1=1', " '=' ", 'AND']

    let ataque = false;
    blackList.forEach((palavra) => {
      if (this.userModel.name?.toUpperCase().includes(palavra)) {
        ataque = true;
      }
      if (this.userModel.email?.toUpperCase().includes(palavra)) {
        ataque = true;
      }
      if (this.userModel.password?.toUpperCase().includes(palavra)) {
        ataque = true;
      }
    })

    if (ataque) {
      return false
    }
    
    if (this.userModel.name === undefined || this.userModel.email === undefined || this.userModel.password === undefined) {
      return false
    }
    else {
      return true
    }
  }

  signinLocal() {
    if (this.validaLogin()) {
      // console.log(this.userModel); dá o objeto genérico
      console.log(this.userModel);
      this.userService.sigin(this.userModel).subscribe(
        //O objeto é usado na documentação do rxjs para o subscribe()
        {
          next: (response) => {
            //arrow function fica como uma função global da classe
            console.log(response);
            this.mensagem = `Logado com Sucesso! ${response.status} ${response.statusText}`

            //O objeto redireciona para a rota vazia, que é a home. Obs:evitar de usar / na string de rota, mas o atibuto htmlAngular "routerLink" é quem recebe /.
            this.router.navigate([''])
          },
          error: (err) => {
            // console.log(err);

            this.mensagem = `${err.error} ${err.status} ${err.statusText}`
          }
        }
      )
    } else {
      this.mensagem = 'Por favor, preencha todos os campos corretamente!'
    }
  }

}
