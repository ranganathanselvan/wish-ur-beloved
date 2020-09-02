import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { WorkInfoComponent } from './work-info/work-info.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LanguagesComponent } from './languages/languages.component';
import { AwardsComponent } from './awards/awards.component';

import { Portfolio } from '../_models/portfolio';
import { Awards } from '../_models/awards';
import { Languages } from '../_models/languages';
import { User } from '../_models/user';

import { PortfolioService } from '../_services/portfolio.service';
import { DataShareService } from '../_services/datashare.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  /*@ViewChild(SkillsComponent) skillReference;
  @ViewChild(WorkInfoComponent) workInfoReference;
  @ViewChild(CertificationsComponent) certificationReference;
  @ViewChild(PersonalInfoComponent) personalInfoReference;
  @ViewChild(AwardsComponent) awardsReference;
  @ViewChild(LanguagesComponent) languagesReference;*/
  portfolio: Portfolio;
 

  constructor(
    private portfolioService: PortfolioService,
    private dataShareService: DataShareService,
    public datepipe: DatePipe,
  ) { }
  currentUser: User;

  ngOnInit(): void {
    this.dataShareService.storedPortfolio.subscribe
      (result =>
        this.portfolio = result
      );
    console.log(this.portfolio);
  }

  ngAfterViewInit(): void {
    /*this.portfolio = this.personalInfoReference.portfolio;
    this.portfolio.skills = this.skillReference.skills;
    this.portfolio.workInfo = this.workInfoReference.works;
    this.portfolio.certifications = this.certificationReference.certificates;
    this.portfolio.awards = this.awardsReference.awards;
    this.portfolio.certifications = this.languagesReference.languages;
    this.portfolio.languages = this.languagesReference.languages;*/
  }

  onSubmit() {
    console.log(this.portfolio);

    this.portfolioService.createPortfolio(this.portfolio).subscribe(
      (data) => {
        alert('Saved successfully!!');
      },
      (error) => {
        if (error.error.Message.search('exists')) {
          this.updateUser();
        } else {
          alert(error.error.Message);
        }
      }
    );
  }

  updateUser() {
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(
      (data) => {
        alert('Updated successfully!!');
      },
      (error) => {
        alert(error.error.Message);
      }
    );

  }

  formatDate(dateValue){
    return this.datepipe.transform(dateValue, 'dd-MMM-yyyy');

  }
}
