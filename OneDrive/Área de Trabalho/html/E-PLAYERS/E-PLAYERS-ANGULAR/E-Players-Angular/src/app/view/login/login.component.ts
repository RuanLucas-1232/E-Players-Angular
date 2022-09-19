import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  validaLogin():boolean{
    if (this.userModel.name === undefined || this.userModel.email === undefined || this.userModel.password === undefined || this.userModel.name === '' || this.userModel.email === '' || this.userModel.password === '') {
      this.mensagem = 'Por favor, preencha todos os campos corretamente!'
      return false
    }
    else{
      return true
    }
  }

  signinLocal() {
    if (this.validaLogin()) {
      this.mensagem = 'Por favor, preencha todos os campos corretamente!'

    } else {
      // console.log(this.userModel); dá o objeto genérico
      console.log(this.userModel);
      this.userService.sigin(this.userModel).subscribe(
        //O objeto é usado na documentação do rxjs para o subscribe()
        {
          next: (response) => {
            //arrow function fica como uma função global da classe
            console.log(response);
            this.mensagem = "Logado com Sucesso!"
          },
          error: (err) => {
            // console.log(err);

            this.mensagem = `${err.error} ${err.status} ${err.statusText}`
          }
        }
      )
    }
  }

}
