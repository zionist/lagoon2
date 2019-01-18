import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface WhoAmIResponse {
    userId: number,
    name: string
}




@Injectable()
export class WhoAmIService {

    constructor(public auth: AuthService, private http: HttpClient) { }

    public whoAmI(): Observable<Object> {        
        return this.http.get<WhoAmIResponse>("http://localhost:8080/api/p2p/whoami",

            {
                headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.idToken}`)
            })
    }
}