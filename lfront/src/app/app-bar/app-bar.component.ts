import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { LANGS } from '../common/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  constructor(public auth: AuthService, public translate: TranslateService) {
   
  }

  public langs = LANGS;
  //public langSelected = "ru"

  get langSelected() {
    return this.translate.currentLang
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    
  }
}
