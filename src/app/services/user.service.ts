import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpClient: HttpClient
  ) { }
  //aqui fica os métodos de requisição http

  url = "http://localhost:3000/signin"

  sigin(user: User): Observable<any> {
    return this.HttpClient.post(
      this.url,//caminho
      JSON.stringify(user),//converte os objetos javaScript em json, ou body
      {//configura o corpo da aplicação
        headers: new HttpHeaders({"Content-Type": "application/json"}),
        observe: "response"
      }
    )
  }
}
