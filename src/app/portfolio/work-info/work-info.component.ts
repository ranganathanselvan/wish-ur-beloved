import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkInfo } from 'src/app/_models/workinfo';

declare var $: any;  // Declaring $ as a variable so that we can use it to access jQuery

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
  @ViewChild('fromDate', { static: false }) fromDate: ElementRef;
  @ViewChild('toDate', { static: false }) toDate: ElementRef;
  constructor() { }

  ngOnInit() {
    this.works = new Array<WorkInfo>();
    $(
      function () {
        $('#fromDate').datepicker({
          dateFormat: 'mm/dd/yy',
          changeMonth: true,
          changeYear: true
        });
        $('#toDate').datepicker({
          dateFormat: 'mm/dd/yy',
          changeMonth: true,
          changeYear: true
        });
      }
    );
  }

  addWorkInfo() {
    if (this.companyName.length > 0) {
      this.from = this.fromDate.nativeElement.value;
      this.to = this.toDate.nativeElement.value;
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
