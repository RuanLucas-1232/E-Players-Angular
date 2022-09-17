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
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  signinLocal(){
    // console.log(this.userModel); dá o objeto genérico
    console.log(this.userModel);
    this.userService.sigin(this.userModel).subscribe(function(response){
      console.log(response);
    })   
  }

}
