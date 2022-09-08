import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';

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
  
  constructor() { }

  ngOnInit(): void {
  }
  capturarDados(){
    // console.log(this.userModel); dá o objeto genérico
    console.log(this.userModel.nome);
    console.log(this.userModel.email);
    console.log(this.userModel.senha);
    
  }

}
