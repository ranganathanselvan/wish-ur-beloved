import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Certification } from 'src/app/_models/certification';
import { PortfolioService } from 'src/app/_services/portfolio.service';
import { DataShareService } from 'src/app/_services/datashare.service';
import { ToastrService } from 'ngx-toastr';
import { Portfolio } from 'src/app/_models/portfolio';
import { DatePipe } from '@angular/common';

declare var $: any;  // Declaring $ as a variable so that we can use it to access jQuery
@Component({
  selector: 'app-portfolio-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  
  portfolio: Portfolio;
  certificates: Array<Certification>;
  name: string;
  id:string;
  issuer:string;
  from: Date;
  to: Date;
  notes: string;
  isNoExpiry: boolean;
  @ViewChild('validFrom', { static: false }) validFrom: ElementRef;
  @ViewChild('validTill', { static: false }) validTill: ElementRef;

  /*constructor(private certService : CertificationService) { }
  name: string;
  id:string;
  issuer:string;
  validFrom: string;
  validTill: string;
  notes: string;*/

  constructor(
    private portfolioService: PortfolioService,
    private dataShareService: DataShareService,
    public datepipe: DatePipe,
    private toastr: ToastrService){}
  

  ngOnInit() {
    $(
      function () {
        $('#validFrom').datepicker({
          dateFormat: 'mm/dd/yy',
          changeMonth: true,
          changeYear: true
        });
        $('#validTill').datepicker({
          dateFormat: 'mm/dd/yy',
          changeMonth: true,
          changeYear: true
        });
      }
    );
    this.dataShareService.storedPortfolio.subscribe
      ((result) => {
        this.portfolio = result;
        this.certificates = result.certifications;
      }
      );
   
  }

  addCert(){
    if(this.name.length>0){
    const newCert = new Certification();
    //this.certService.addCertificate(newCert);
    //this.certificates = this.certService.getCertificates();
    this.from = this.validFrom.nativeElement.value;
    this.to = this.validTill.nativeElement.value;
    newCert.certificationName = this.name;
    newCert.certificationId = this.id;
    newCert.issuedBy = this.issuer;
    newCert.validFrom = this.from;
    newCert.validTill = this.to;
    newCert.additionalNotes = this.notes;
    newCert.isNoExpiry = this.isNoExpiry;
    this.certificates.push(newCert);
    console.log(this.from);
    this.name='';
    this.id='';
    this.issuer='';
    this.from=null;
    this.to=null;
    this.notes='';
    this.isNoExpiry=false;
    
    }
  }

  formatDate(dateValue){
    return this.datepipe.transform(dateValue, 'dd-MMM-yyyy');

  }
  delCert(index){
   
    if (this.certificates.length > 0) {
      this.certificates.splice(index, 1);
    }
    // this.certService.deleteCertificate(index);
    // this.certificates = this.certService.getCertificates();
  }
  
  updateCert() {
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(
      (data) => {
        console.log(this.toastr);
        this.toastr.success('Updated successfully!!!', 'Success!',
          {
            timeOut: 2000,
            positionClass: 'toast-center-center'
          });
      },
      (error) => {
        this.toastr.error(error.error.Message, 'Error!', {
          timeOut: 3000,
          positionClass: 'toast-center-center'
        });
      }
    );
  }

}
