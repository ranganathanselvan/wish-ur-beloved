import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { DataShareService } from './_services/datashare.service';
import { PortfolioService } from './_services/portfolio.service';
import { Portfolio } from './_models/portfolio';
import { Skills } from './_models/Skills';
import { WorkInfo } from './_models/workinfo';
import { Certification } from './_models/certification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  year: number;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private dataShareService: DataShareService,
    private portfolioService: PortfolioService
  ) {
    this.year = (new Date()).getFullYear();
    this.authenticationService.currentUser.subscribe(
      (data) => {
        this.currentUser = data;
        this.dataShareService.setCurrentUser(data);

        if (this.currentUser) {
          this.portfolioService.getPortfolio(this.currentUser.email).subscribe(
            (value: Portfolio) => {
              this.dataShareService.setPortfolio(value);
              console.log('app.componet.ts get portfolio complete.');
            },
            (error) => {
              const objPortfolio = new Portfolio();
              objPortfolio.email = this.currentUser.email;
              objPortfolio.firstName = this.currentUser.firstName;
              objPortfolio.lastName = this.currentUser.lastName;
              objPortfolio.mobile = this.currentUser.phone.toString();
              objPortfolio.skills = new Array<Skills>();
              objPortfolio.workInfo = new Array<WorkInfo>();
              objPortfolio.certifications = new Array<Certification>();
              this.dataShareService.setPortfolio(objPortfolio);
              // alert(error.error.Message);
            });
        }
      });

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
