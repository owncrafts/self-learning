import { Component } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DP Practice';
  menus = [
    {
      "name" : "Home",
      "link": "/"
    },
    {
      "name" : "Rooms",
      "link": "/rooms"
    },
    {
      "name" : "AboutUs",
      "link": "/about"
    },
    {
      "name" : "ContactUs",
      "link": "/contact"
    },
  ]
}
