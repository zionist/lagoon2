import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonToggleModule} from '@angular/material';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AuthService } from './service/auth/auth.service';
import { WhoamiComponent } from './component/whoami/whoami.component';
import { HttpClientModule } from '@angular/common/http';
import { WhoAmIService } from './service/whoami/whoami.service';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'auth/successLogin', component: AuthCallbackComponent },  
  { path: 'whoami', component: WhoamiComponent}
  //{ path: '',   redirectTo: '/app', pathMatch: 'full' }
  
  
  //{ path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    WhoamiComponent,
    AuthCallbackComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),


    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [AuthService, WhoAmIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
