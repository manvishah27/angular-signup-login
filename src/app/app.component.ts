import { Component } from '@angular/core';
import { user } from './user';

import 'zone.js';
import 'reflect-metadata'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  title = 'Signup Login'

  public static Users : user[] = [
    {
      username: 'Monica',
      password: 'iknow'
    },
    {
      username: 'Rachel',
      password: 'emma'
    },
    {
      username: 'Ross',
      password: 'dinosaurs'
    },
    {
      username: 'Chandler',
      password: 'sarcasm'
    },
    {
      username: 'Joey',
      password: 'pizza'
    },
    {
      username: 'Pheobe',
      password: 'smellycat'    
    }
  ];
  
}
