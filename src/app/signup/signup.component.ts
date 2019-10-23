import { Component, OnInit, Input } from '@angular/core';
import { user } from '../user';
import { AppComponent } from '../app.component';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  signupUser(event) {
    event.preventDefault();
    const target =event.target;
    var flag=0;
    const username=event.target.querySelector('#username').value;
    const password=event.target.querySelector('#password').value;
    console.log("Username: "+username+" password: "+password);
    AppComponent.Users.forEach(user => {
      if(user.username==username){
        flag=1;
      }
    });
    if(flag==1){
      alert("Username already taken.");
    }else{
      var u= {username: username, password: password};
      AppComponent.Users.push(u);
      alert("You are registered successfully");
    }
  }

}