import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

interface WhoAmIResponse {
    message: string;
}

@Injectable()
export class WhoAmIService {

    constructor(public auth: AuthService, private http: HttpClient) { }

    public whoAmI(): Observable<Object> {
        console.log("whoami")
        console.log(this.auth.accessToken)
        return this.http.get("http://localhost:8080/api/p2p/whoami",

            {
                headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            })
    }
}