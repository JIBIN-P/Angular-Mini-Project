import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle = "Welcome To Angular Package Manager";  
  
  constructor() { }

  ngOnInit() {
  }

}
