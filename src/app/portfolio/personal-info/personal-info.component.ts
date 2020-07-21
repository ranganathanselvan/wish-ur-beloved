import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/_models/portfolio';

@Component({
  selector: 'app-portfolio-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  portfolio: Portfolio;

  constructor() { }

  ngOnInit(): void {
    this.portfolio = new Portfolio();
  }

}
