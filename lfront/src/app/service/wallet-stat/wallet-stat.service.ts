import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface WalletStatDto {
    code: String,
    paymentsHour: Number,
    minWithdrawal: String,
    withdrawEnabled: Boolean,
    depositEnabled: Boolean,
    fee: String,
    paymentsQueue: Number,
    paymentsError: Number,
    inputHour: Number,
    unconfirmed: Number
}




@Injectable()
export class WalletStatService {

    constructor(private http: HttpClient) { }

    

    public loadWalletStat(): Observable<Object> {   
        console.log("get")     
        return this.http.get<WalletStatDto[]>("http://localhost:8080/api/p2p/public/wallet/stat")

    }
}