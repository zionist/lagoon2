import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(public auth: AuthService) {   
    
  }

  ngOnInit() {
    console.log("hello")
    this.auth.handleAuthentication();
    console.log(this.auth.accessToken)
    console.log(this.auth.idToken)
    //if (localStorage.getItem('isLoggedIn') === 'true') {
    //  this.auth.renewTokens();
    //  console.log(this.auth.accessToken)
    //   console.log(this.auth.idToken)
    //}
  }




}
