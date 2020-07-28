import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { WorkInfoComponent } from './work-info/work-info.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LanguagesComponent } from './languages/languages.component';
import { AwardsComponent } from './awards/awards.component';

import { Portfolio } from '../_models/portfolio';
import { Awards } from '../_models/awards';
import { Languages } from '../_models/languages';

import { PortfolioService } from '../_services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild(SkillsComponent) skillReference;
  @ViewChild(WorkInfoComponent) workInfoReference;
  @ViewChild(CertificationsComponent) certificationReference;
  @ViewChild(PersonalInfoComponent) personalInfoReference;
  @ViewChild(AwardsComponent) awardsReference;
  @ViewChild(LanguagesComponent) languagesReference;
  portfolio: Portfolio;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.portfolio = this.personalInfoReference.portfolio;
    this.portfolio.skills = this.skillReference.skills;
    this.portfolio.workInfo = this.workInfoReference.works;
    this.portfolio.certifications = this.certificationReference.certificates;
    this.portfolio.awards = this.awardsReference.awards;
    this.portfolio.certifications = this.languagesReference.languages;
  }

  onSubmit() {
    console.log(this.portfolio);
    this.portfolioService.createPortfolio(this.portfolio).subscribe(
      (data) => {
        alert('Your information saved successfully!!');
      },
      (error) => {
        alert(error.error.Message);
      });
  }
}
