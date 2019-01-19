import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  

    auth0 = new auth0.WebAuth({
        clientID: 'OL926gD0Zha6h80uJx4TVhJLMKrJemjb',
        domain: 'bitzlato-dev.auth0.com',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:4200/auth/successLogin',
        scope: 'openid profile email'
    });

    constructor(public router: Router) {
        
    }

    

    public set idToken(idToken: string) {
        localStorage.setItem('idToken', idToken);
    }

    public set expiresAt(expiresAt: number) {
        localStorage.setItem('expiresAt', String(expiresAt));
    }        
    
    public set accessToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
    }


    public get accessToken(): string {
        return localStorage.getItem('accessToken');
    }

    public get idToken(): string {
        return localStorage.getItem('idToken');
    }

    public get expiresAt(): number {
        return Number(localStorage.getItem('expiresAt'));
    }



    public login(): void {
        console.log("Do login")
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        console.log("Handle auth")
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log("Auth success")
                window.location.hash = '';
                this.localLogin(authResult);
                this.router.navigate(['/whoami']);
            } else if (err) {
                console.log("Auth err")
                this.router.navigate(['/']);
                console.log(err);
            }
        });
    }

    private localLogin(authResult): void {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the access token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;
    }

    public renewTokens(): void {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.localLogin(authResult);
            } else if (err) {
                alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
                this.logout();
            }
        });
    }

    public logout(): void {
        // Remove tokens and expiry time
        this.accessToken = '';
        this.idToken = '';
        this.expiresAt = 0;
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');

        
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        return new Date().getTime() < this.expiresAt;
    }


}