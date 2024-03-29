import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    appRoutingModule
  ],
  declarations: [ 
    AppComponent,  
    HomeComponent, 
    LoginComponent, 
    SignupComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
