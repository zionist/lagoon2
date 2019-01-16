import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonToggleModule} from '@angular/material';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
