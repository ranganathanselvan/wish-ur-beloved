import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/_models/portfolio';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { DataShareService } from 'src/app/_services/datashare.service';

@Component({
  selector: 'app-portfolio-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  portfolio: Portfolio;

  constructor(
    private portfolioService: PortfolioService,
    private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.dataShareService.storedPortfolio.subscribe
      (result =>
        this.portfolio = result
      );
  }
  updatePersonalInfo() {
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(
      (data) => {
        alert('Updated successfully!!');
      },
      (error) => {
        alert(error.error.Message);
      }
    );
  }

}
