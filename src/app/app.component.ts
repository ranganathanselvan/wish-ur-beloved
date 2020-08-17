import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { DataShareService } from './_services/datashare.service';
import { PortfolioService } from './_services/portfolio.service';
import { Portfolio } from './_models/portfolio';

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
              alert(error.error.Message);
            });
        }
      });

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
