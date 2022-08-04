import { Component } from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friend-list';
  languagesArr = ['html' , 'css' , 'javaScript' , 'php'];
  friend = new Friend( '',"" , "" , 0 , "" , "");
}
