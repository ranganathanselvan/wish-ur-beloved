import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private dataShareService: DataShareService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataShareService.storedPortfolio.subscribe
      (result =>
        this.portfolio = result
      );
  }
  updatePersonalInfo() {
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(
      (data) => {
        this.toastr.success('Updated successfully!!!', 'Success!', { timeOut: 2000 });
      },
      (error) => {
        this.toastr.error(error.error.Message, 'Error!', {
          timeOut: 3000
        });
      }
    );
  }

}
