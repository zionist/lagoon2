import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(public auth: AuthService) {
    console.log("contructor")
    
  }

  ngOnInit() {
    console.log("hello")
    this.auth.handleAuthentication();
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }




}
