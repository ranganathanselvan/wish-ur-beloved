import { Component, OnInit } from '@angular/core';
import { WorkInfo } from 'src/app/_models/workinfo';

@Component({
  selector: 'app-portfolio-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.css']
})
export class WorkInfoComponent implements OnInit {

  works: Array<WorkInfo>;
  companyName: string;
  designation: string;
  from: Date;
  to: Date;
  isCurrentCompany: boolean;
  expInYearMonth: string;

  constructor() { }

  ngOnInit() {
    this.works = new Array<WorkInfo>();
  }

  addWorkInfo() {
    if (this.companyName.length > 0) {
      const w = new WorkInfo();
      w.companyName = this.companyName;
      w.role = this.designation;
      w.startDate = this.from;
      w.endDate = this.to;
      w.isCurrentCompany = this.isCurrentCompany;
      w.experienceInYearMonth = this.expInYearMonth;
      this.works.push(w);
      this.companyName = '';
      this.designation = '';
      this.from = null;
      this.to = null;
      this.isCurrentCompany = false;
      this.expInYearMonth = '';
    }
  }
  delWorkInfo(index) {
    if (this.works.length > 0) {
      this.works.splice(index, 1);
    }
  }
}
