import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasklog';
   constructor (  public route : Router){} 
  show:boolean=false
  log(){
this.show=!this.show
this.route.navigate(["log"])
  }
}
