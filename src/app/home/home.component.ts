import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public currentUser;
  constructor() {
    this.currentUser = sessionStorage.getItem('currentUser')? JSON.parse(sessionStorage.getItem('currentUser')) : '';
   }

  ngOnInit() {

  }

}
