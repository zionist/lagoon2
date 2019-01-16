import { Component, OnInit } from '@angular/core';
import { WhoAmIService } from 'src/app/service/whoami/whoami.service';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {

  constructor(public whoAmIService: WhoAmIService) {
    
  }


  private loadWhoAmI() {
    this.whoAmIService.whoAmI().subscribe(
      data => console.log(data)
    )
  }

  ngOnInit() {
    this.loadWhoAmI()
  }

}
