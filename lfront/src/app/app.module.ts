import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonToggleModule, MatGridListModule, MatTableModule, MatCardModule, MatSelectModule, MatMenuModule, MatTooltipModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

// internationalisation
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AuthService } from './service/auth/auth.service';
import { WhoamiComponent } from './component/whoami/whoami.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WhoAmIService } from './service/whoami/whoami.service';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';
import { Routes, RouterModule } from '@angular/router';
import { WalletStatComponent } from './component/wallet-stat/wallet-stat.component';
import { WalletStatService } from './service/wallet-stat/wallet-stat.service';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'auth/successLogin', component: AuthCallbackComponent },  
  { path: 'whoami', component: WhoamiComponent}
  //{ path: '',   redirectTo: '/app', pathMatch: 'full' }
  
  
  //{ path: '**', component: PageNotFoundComponent }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    WhoamiComponent,
    AuthCallbackComponent,
    WalletStatComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),


    BrowserModule,
    //i18i
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    //
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,   
    MatMenuModule,
    MatTooltipModule,
    NgbModule
  ],
  providers: [AuthService, WhoAmIService, WalletStatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
