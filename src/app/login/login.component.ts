import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { AppComponent } from '../app.component';
import { from } from 'rxjs';
import {  Router, Routes } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router ) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target =event.target;
    var flag=0;
    const username=event.target.querySelector('#username').value;
    const password=event.target.querySelector('#password').value;
    console.log("Username: "+username+" pass: "+password);
    AppComponent.Users.forEach(user => {
      if(user.username==username&&user.password==password){
        alert("You are logged in sucessfully!");
        flag=1;
      }
    });
    if(flag!=1){
      alert("Invalid username or password.");
    }

  }

}