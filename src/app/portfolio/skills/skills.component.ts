import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/_models/Skills';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { DataShareService } from 'src/app/_services/datashare.service';
import { Portfolio } from 'src/app/_models/portfolio';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  portfolio: Portfolio;
  skills: Array<Skills>;
  txtskills: string;

  constructor(
    private portfolioService: PortfolioService,
    private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.dataShareService.storedPortfolio.subscribe
      ((result) => {
        this.portfolio = result;
        this.skills = result.skills;
      }
      );
  }

  addSkills() {
    if (this.txtskills.length > 0) {
      const sks = new Skills();
      sks.skillName = this.txtskills;
      this.skills.push(sks);
      this.txtskills = '';
    }
  }

  removeSkill(index) {
    if (this.skills.length > 0) {
      this.skills.splice(index, 1);
    }
  }

  updateSkills() {
    if (this.skills.length > 0) {
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

}
