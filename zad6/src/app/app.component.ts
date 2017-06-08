import { Component } from '@angular/core';
export var hardware: Array<any> = [
    { "model": "iPhone 7",  "rok": "2016", "pojemnosc": "256"},
    { "model": "iPhone 6s",  "rok": "2015", "pojemnosc": "128"},
    { "model": "iPhone 5c",  "rok": "2013", "pojemnosc": "32"},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hardware: Array<any>;

  constructor(){
       this.hardware=hardware;

  }
}
