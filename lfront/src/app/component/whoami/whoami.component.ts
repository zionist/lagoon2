import { Component, OnInit } from '@angular/core';
import { WhoAmIService, WhoAmIResponse } from 'src/app/service/whoami/whoami.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {

  public whoAmI : WhoAmIResponse 

  constructor(public whoAmIService: WhoAmIService) {
    
  }


  private loadWhoAmI() {
    this.whoAmIService.whoAmI().subscribe(
      (data: WhoAmIResponse) => this.whoAmI = data
    )
  }

  ngOnInit() {
    this.loadWhoAmI()
  }

}
