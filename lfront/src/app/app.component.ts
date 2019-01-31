import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  param = {value: 'world'};

    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('ru');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('ru');

        console.log(translate.currentLang)



    }


}
