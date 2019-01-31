import { Component, OnInit } from '@angular/core';
import { WalletStatDto, WalletStatService } from 'src/app/service/wallet-stat/wallet-stat.service';




@Component({
  selector: 'wallet-stat',
  templateUrl: './wallet-stat.component.html',
  styleUrls: ['./wallet-stat.component.scss']
})
export class WalletStatComponent implements OnInit {

  displayedColumns: string[] = [
    'code', 
    'fee', 
    'paymentsHour', 
    'minWithdrawal', 
    'withdrawEnabled',
    'depositEnabled',
    'paymentsQueue',
    'paymentsError',
    'inputHour',
    'unconfirmed'

  
  
  ];

  
  public walletStat: WalletStatDto[]

  constructor(private walletStatService: WalletStatService) { }

  ngOnInit() {
    this.loadWalletStat()
  }

  private loadWalletStat(){
    this.walletStatService.loadWalletStat().subscribe(
      (data: WalletStatDto[]) =>  { 
      
        this.walletStat = data 
        console.log(this.walletStat)
      }
    )

  }

}
